import { Provider } from 'next-auth/client';
import { GlobalStyle } from '../styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
