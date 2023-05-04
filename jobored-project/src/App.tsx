import { Global, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from 'components/Header/Header';
import { DEFAULT_STORAGE_CONFIG, LocalStorageKey } from 'constants/storage';
import { headerLinks } from 'constants/header';
import { Paths } from 'constants/paths';
import { useLocalState } from 'hooks/useLocalState';
import { Home } from 'pages/Home/Home';
import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
      })}
    />
  );
}

function App() {
  const [token, setToken] = useLocalState(
    LocalStorageKey.authToken,
    DEFAULT_STORAGE_CONFIG
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
            h4: { fontWeight: 400, fontSize: '1rem', lineHeight: 1.25 },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <GlobalStyles />
      <HeaderMegaMenu links={headerLinks} />
      <Routes>
        <Route path={Paths.home} element={<Home />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
