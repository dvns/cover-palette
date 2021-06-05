import { SiSpotify } from 'react-icons/si';
import styled from 'styled-components';
import { StyledButton } from '../styles/ButtonStyles';

const StyledSpotifyButton = styled(StyledButton)`
  background: ${({ theme }) => theme.spotifyButton};
  color: ${({ theme }) => theme.spotifyButtonText};
  position: relative;

  &:hover {
    transform: scale(1.03);
    z-index: 1;
  }
`;

export default function SpotifyButton({ children, onClick }) {
  return (
    <StyledSpotifyButton onClick={onClick}>
      <SiSpotify /> {children}
    </StyledSpotifyButton>
  );
}
