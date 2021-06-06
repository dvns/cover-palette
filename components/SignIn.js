import { signIn } from 'next-auth/client';
import styled from 'styled-components';
import SpotifyButton from './SpotifyButton';

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
  return (
    <StyledSignIn className={className}>
      <h2 className="mx-auto">
        Sign in to Spotify for colour inspirations from your own&nbsp;playlist!
      </h2>
      <SpotifyButton onClick={() => signIn('spotify')}>
        Connect to Spotify
      </SpotifyButton>
    </StyledSignIn>
  );
}
