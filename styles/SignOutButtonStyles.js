import styled from 'styled-components';

export const StyledSignOutButton = styled.button`
  padding: 0;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.spotifyButton};
  color: ${({ theme }) => theme.text};
  background: none;
`;
