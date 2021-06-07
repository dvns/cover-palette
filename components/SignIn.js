import { signIn } from 'next-auth/client';
import styled from 'styled-components';
import SpotifyButton from './SpotifyButton';
import * as ga from '../lib/ga';

const StyledSignIn = styled.div`
  text-align: center;

  h2 {
    max-width: 350px;
    line-height: 1.4;
    font-weight: 400;
  }

  button {
    margin-top: 1rem;
    max-width: 100%;
  }

  @media (min-width: 576px) {
    button {
      width: auto;
    }
  }
`;

export default function SignIn({ className }) {
  function handleClick() {
    signIn('spotify');

    ga.event({
      action: 'button_click',
      params: {
        category: 'Spotify',
        label: 'Sign in',
      },
    });
  }

  return (
    <StyledSignIn className={className}>
      <h2 className="mx-auto">
        Find colour inspirations from your&nbsp;own&nbsp;playlist!
      </h2>
      <SpotifyButton onClick={handleClick}>Connect to Spotify</SpotifyButton>
    </StyledSignIn>
  );
}
