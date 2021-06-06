import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  spotifyButton: '#61d961',
  spotifyButtonText: '#000',
};

export const darkTheme = {
  body: '#121212',
  text: '#FFF',
  spotifyButton: '#61d961',
  spotifyButtonText: '#000',
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    --border-radius: 0;
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

  .Toastify__toast--success {
    font-family: 'DM Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    background: ${({ theme }) => theme.spotifyButton};
    color: black;
  }

  .Toastify__close-button {
    color: black;
  }

   a {
     color: ${({ theme }) => theme.text};
     transition: color 0.3s ease;

     &:hover {
      color: ${({ theme }) => theme.body};
     }
   }
`;
