import { useCallback, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import { AppProvider, useParams } from 'store';
import Home from 'pages/Home/Home';
import FavoritesPage from 'pages/Favourites/Favourites-page';

function GlobalStyles() {
  return (
    <Global
      styles={() => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',

          '& input': {
            borderRadius: '0.5rem',
          },
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

// const Home = lazy(() => import('pages/Home/Home'));
// const FavoritesPage = lazy(() => import('pages/Favourites/Favourites-page'));
// const VacancyPage = lazy(() => import('pages/Vacancy/Vacancy-page'));

function App() {
  const [token, setToken] = useStorage(LocalStorageKey.authToken, DEFAULT_STORAGE_CONFIG);
  const {
    state: { data }
  } = useParams();
  const { pathname } = useLocation()

  const handleAuth = useCallback(async () => {
    try {
      if (token) return;
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
      <HeaderMegaMenu links={headerLinks} />
      <AppProvider pathName={pathname}>
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

      </ AppProvider>
    </MantineProvider>
  );
}

export default App;
