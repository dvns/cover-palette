import { signIn } from 'next-auth/client';
import styled from 'styled-components';
import SpotifyButton from './SpotifyButton';

const StyledSignIn = styled.div`
  max-width: 250px;

  h2 {
    margin-bottom: 30px;
  }
`;

export default function SignIn({ className }) {
  return (
    <StyledSignIn className={className}>
      <h2>Colour inspirations from your current playlist</h2>
      <SpotifyButton onClick={() => signIn('spotify')}>
        Connect to Spotify
      </SpotifyButton>
    </StyledSignIn>
  );
}
