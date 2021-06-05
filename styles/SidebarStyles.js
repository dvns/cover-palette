import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  top: 3rem !important;
  padding-right: 40px;
  margin-bottom: 30px;
  letter-spacing: -0.1rem;

  h1 {
    font-weight: 700;
    letter-spacing: -0.1rem;
    line-height: 1;
  }

  @media (min-width: 375px) {
    h1 {
      font-size: 4.8rem;
      margin-bottom: 30px;
    }

    h2 {
      margin-bottom: 30px;
    }
  }

  .blob {
    position: absolute;
    top: -15px;
    left: -15px;
    z-index: -1;
  }
`;
