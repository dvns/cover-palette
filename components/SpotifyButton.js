import { SiSpotify } from 'react-icons/si';
import styled from 'styled-components';
import { StyledButton } from '../styles/ButtonStyles';

const StyledSpotifyButton = styled(StyledButton)`
  background: ${({ theme }) => theme.spotifyButton};
  color: ${({ theme }) => theme.spotifyButtonText};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: 102%;
    width: 102%;
    opacity: 0;
    border-radius: var(--border-radius);
    background: inherit;
    filter: blur(8px);
    transition: all 0.2s;
  }

  &:hover {
    transform: scale(1.03);
    z-index: 1;
    &::after {
      opacity: 0.9;
    }
  }
`;

export default function SpotifyButton({ children, onClick }) {
  return (
    <StyledSpotifyButton onClick={onClick}>
      <SiSpotify /> {children}
    </StyledSpotifyButton>
  );
}
