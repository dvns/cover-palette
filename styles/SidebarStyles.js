import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  top: 3rem !important;
  padding-right: 40px;
  margin-bottom: 30px;
  letter-spacing: -0.1rem;

  @media (min-width: 375px) {
    h2 {
      margin-top: 50px;
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
