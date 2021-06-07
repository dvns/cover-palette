import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: var(--border-radius);
  transition: all 0.2s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.03);
      z-index: 1;
    }
  }
`;
