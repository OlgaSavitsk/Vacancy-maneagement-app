import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from 'components/Header/Header';
import { headerLinks } from 'constants/header';
import { Paths } from 'constants/paths';
import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <MantineProvider theme={{
      fontFamily: 'Inter, sans-serif',
    }}
      withGlobalStyles
      withNormalizeCSS>
      <HeaderMegaMenu links={headerLinks} />

      <Routes>
        <Route path={Paths.home} element={<Home />} />
      </Routes>
    </MantineProvider>
  )
}

export default App
