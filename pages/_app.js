import { Provider } from 'next-auth/client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme, GlobalStyle } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider session={pageProps.session}>
          <button onClick={darkmode.toggle}>Switch Mode</button>
          {isMounted && <Component {...pageProps} />}
        </Provider>
      </ThemeProvider>
    </>
  );
}
