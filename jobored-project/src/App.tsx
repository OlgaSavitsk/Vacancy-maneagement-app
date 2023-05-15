import { lazy, Suspense, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from 'components/Header/Header';
import { DEFAULT_STORAGE_CONFIG, LocalStorageKey } from 'constants/storage';
import { headerLinks } from 'constants/header';
import { Paths } from 'constants/paths';
import { useStorage } from 'hooks/useLocalState';
import { getAuthToken } from 'api/auth.service';


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

const Home = lazy(() => import('pages/Home/Home'))
const FavoritesPage = lazy(() => import('pages/Favourites/Favourites'))

function App() {
  const [token, setToken] = useStorage(
    LocalStorageKey.authToken,
    DEFAULT_STORAGE_CONFIG,
  );

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
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <GlobalStyles />
      <HeaderMegaMenu links={headerLinks} />
      <Suspense>
        <Routes>
          <Route path={Paths.home} element={<Home />} />
          <Route path={Paths.favourites} element={<FavoritesPage />} />
        </Routes>
      </Suspense>
    </MantineProvider>
  );
}

export default App;
