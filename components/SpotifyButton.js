import { MdArrowForward } from 'react-icons/md';
import styled from 'styled-components';
import { StyledButton } from '../styles/ButtonStyles';

const StyledSpotifyButton = styled(StyledButton)`
  background: ${({ theme }) => theme.spotifyButton};
  color: ${({ theme }) => theme.spotifyButtonText};
  position: relative;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.03);
    z-index: 1;
  }
`;

export default function SpotifyButton({ children, onClick, className }) {
  return (
    <StyledSpotifyButton onClick={onClick} className={className}>
      {children} <MdArrowForward />
    </StyledSpotifyButton>
  );
}
