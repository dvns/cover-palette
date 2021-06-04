import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  background: '#fff',
};

export const darkTheme = {
  body: '#121212',
  text: '#FFF',
  background: 'rgb(31, 31, 31)',
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    --border-radius: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button {
    font-family: 'DM Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    border: none;
  }

  .hero {
    h1 {
      display: inline;
      font-size: 6rem;
      font-weight: 700;
      margin: 0;
      padding: 0;
      line-height: 1;
      letter-spacing: -.2rem;
    }
  }
`;
