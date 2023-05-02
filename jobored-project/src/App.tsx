import { Global, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from 'components/Header/Header';
import { headerLinks } from 'constants/header';
import { Paths } from 'constants/paths';
import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

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
          }
        },
      })}
    />
  );
}

function App() {

  return (
    <MantineProvider theme={{
      fontFamily: 'Inter, sans-serif',
      headings: {
        sizes: {
          h4: { fontWeight: 400, fontSize: '1rem', lineHeight: 1.25 },
        },
      },
    }}
      withGlobalStyles
      withNormalizeCSS >
      <GlobalStyles />
      <HeaderMegaMenu links={headerLinks} />
      <Routes>
        <Route path={Paths.home} element={<Home />} />
      </Routes>

    </MantineProvider >
  )
}

export default App
