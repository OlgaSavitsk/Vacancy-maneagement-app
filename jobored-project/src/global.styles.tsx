import { Global } from '@mantine/core';

export function GlobalStyles() {
    return (
      <Global
        styles={(theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          body: {
            position: 'relative',
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
          a: {
            textDecoration: 'none',
            color: theme.black,
          },
        })}
      />
    );
  }