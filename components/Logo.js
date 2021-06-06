import styled from 'styled-components';
import Blob from './Blob';

const StyledLogo = styled.span`
  letter-spacing: -0.1rem;
  line-height: 1;
  position: relative;
  display: inline-block;

  h1 {
    font-size: 4.8rem;
    font-weight: 700;
  }

  .blob {
    position: absolute;
    top: -15px;
    left: -15px;
    z-index: -1;
    width: 110px;
    height: 115px;
  }
`;

export default function Logo({ blob }) {
  return (
    <StyledLogo className="logo">
      {blob && <Blob />}
      <h1>
        Cover <br />
        Palettes
      </h1>
    </StyledLogo>
  );
}
