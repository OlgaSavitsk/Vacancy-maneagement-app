import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from 'components/Header/Header';
import { DEFAULT_STORAGE_CONFIG, LocalStorageKey } from 'constants/storage';
import { headerLinks } from 'constants/header';
import { Paths } from 'constants/paths';
import { useStorage } from 'hooks/useLocalState';
import { getAuthToken } from 'api/auth.service';
import { VacancyPage } from 'pages/Vacancy/Vacancy-page';
import { NotFound } from 'pages/NotFound/NotFound';
import { GuardedRoute } from 'core/guards/vacancy.guard';
import { AppProvider } from 'store';
import Home from 'pages/Home/Home';
import FavoritesPage from 'pages/Favourites/Favourites-page';

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          transition: 'all 1s ease-out',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',

          '& input': {
            borderRadius: '0.5rem',
          },
        },
        '.container': {
          display: 'flex',
          flex: '1 1 auto',
          width: '100%',
          background: theme.colors.grey[2],
        },
        ul: {
          display: 'flex',
          flexDirection: 'column',
          listStyleType: 'none',
        },
      })}
    />
  );
}

function App() {
  const [token, setToken] = useStorage(LocalStorageKey.authToken, DEFAULT_STORAGE_CONFIG);

  const handleAuth = useCallback(async () => {
    try {
      if (token.access_token) return;
      const { access_token, refresh_token } = await getAuthToken();
      setToken({ access_token, refresh_token });
    } catch (e) {
      console.log(e);
    }
  }, [setToken, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <MantineProvider
      theme={{
        fontFamily: 'Inter, sans-serif',
        colors: {
          hover: ['#92C1FF', '#5E96FC'],
          active: ['#5E96FC'],
          grey: ['#ACADB9', '#7B7C88', '#F7F7F8'],
        },
        headings: {
          sizes: {
            h4: {
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.25,
              fontFamily: 'Inter, sans-serif',
            },
          },
        },
        components: {
          Option: {
            styles: {
              option: {
                backgroundColor: '#5E96FC',
              },
            },
          },
          Button: {
            styles: (theme) => ({
              root: {
                transition: 'all 0.2s ease-out',
                ...theme.fn.hover({ backgroundColor: theme.colors.hover[0] }),
                '&:active': {
                  backgroundColor: theme.colors.active,
                },
              },
            }),
          },
          TypographyStylesProvider: {
            styles: {
              root: {
                '& b': {
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  marginTop: '1rem',
                },
                '& ul, ul > li, p,': {
                  padding: 0,
                  margin: 0,
                },
                '& ul': {
                  listStyleType: 'disc',
                  paddingLeft: '1.5rem',
                },
              },
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <GlobalStyles />

      <AppProvider>
        <HeaderMegaMenu links={headerLinks} />
        <Routes>
          <Route path={Paths.home} element={<Home />} />
          <Route
            path={Paths.favourites}
            element={
              <GuardedRoute>
                <FavoritesPage />
              </GuardedRoute>
            }
          />
          <Route path={`${Paths.vacancy}/:id`} element={<VacancyPage />} />
          <Route path={Paths.notFound} element={<NotFound isPage={true} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
    </MantineProvider>
  );
}

export default App;
