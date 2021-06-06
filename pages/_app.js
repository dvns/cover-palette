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
        <title>Cover Palettes</title>
        <meta
          name="description"
          content="Colours inspired by what you're listening to."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider session={pageProps.session}>
          {isMounted && <Component {...pageProps} />}
        </Provider>
      </ThemeProvider>
    </>
  );
}
