import { Provider } from 'next-auth/client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme, GlobalStyle } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import 'react-placeholder/lib/reactPlaceholder.css';
import * as ga from '../lib/ga';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
