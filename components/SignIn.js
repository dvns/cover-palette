import { signIn } from 'next-auth/client';
import styled from 'styled-components';
import SpotifyButton from './SpotifyButton';

const StyledSignIn = styled.div`
  max-width: 400px;

  h2 {
    margin-bottom: 30px;
  }
`;

export default function SignIn({ className }) {
  return (
    <StyledSignIn className={className}>
      <h2>
        Sign in to Spotify to see colours inspired by what you're
        listening&nbsp;to.
      </h2>
      <SpotifyButton onClick={() => signIn('spotify')}>
        Try it out!
      </SpotifyButton>
    </StyledSignIn>
  );
}
