import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  top: 3rem !important;

  h2,
  p {
    font-weight: 400;
    max-width: 350px;
    padding-bottom: 1rem;
  }

  p {
    max-width: 300px;
  }

  strong {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.spotifyButton};
    text-decoration-thickness: 5px;
  }

  @media (min-width: 576px) and (max-width: 921.98px) {
    h2 {
      max-width: 400px;
    }
  }

  @media (min-width: 922px) {
    h2 {
      font-size: 2rem;
      padding-right: 2rem;
    }
  }
`;
