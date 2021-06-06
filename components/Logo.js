import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-weight: 700;
  letter-spacing: -0.1rem;
  line-height: 1;

  @media (min-width: 375px) {
    font-size: 4.8rem;
    margin-bottom: 30px;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      Cover <br />
      Palettes
    </StyledLogo>
  );
}
