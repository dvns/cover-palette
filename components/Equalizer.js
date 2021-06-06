import styled from 'styled-components';

const StyledEqualizer = styled.div`
  svg {
    width: 100%;
    height: 100%;
    g {
      fill: ${(theme) => theme.text};
    }
  }

  #bar1 {
    animation: bar1 1.2s infinite linear;
  }

  #bar2 {
    animation: bar2 0.8s infinite linear;
  }

  #bar3 {
    animation: bar3 1s infinite linear;
  }

  #bar4 {
    animation: bar4 0.7s infinite linear;
  }

  @keyframes bar1 {
    0% {
      height: 2px;
    }
    50% {
      height: 7px;
    }
    100% {
      height: 2px;
    }
  }

  @keyframes bar2 {
    0% {
      height: 5px;
    }
    40% {
      height: 1px;
    }
    80% {
      height: 7px;
    }
    100% {
      height: 5px;
    }
  }

  @keyframes bar3 {
    0% {
      height: 7px;
    }
    50% {
      height: 0;
    }
    100% {
      height: 7px;
    }
  }

  @keyframes bar4 {
    0% {
      height: 2px;
    }
    50% {
      height: 7px;
    }
    100% {
      height: 2px;
    }
  }
`;

export default function Equalizer({ className }) {
  return (
    <StyledEqualizer className={`equalizer ${className}`}>
      <svg
        viewBox="0 0 10 7"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio
      >
        <g>
          <rect
            id="bar1"
            transform="translate(0.500000, 6.000000) rotate(180.000000) translate(-0.500000, -6.000000) "
            x="0"
            y="5"
            width="1"
            height="2px"
          ></rect>
          <rect
            id="bar2"
            transform="translate(3.500000, 4.500000) rotate(180.000000) translate(-3.500000, -4.500000) "
            x="3"
            y="2"
            width="1"
            height="5"
          ></rect>
          <rect
            id="bar3"
            transform="translate(6.500000, 3.500000) rotate(180.000000) translate(-6.500000, -3.500000) "
            x="6"
            y="0"
            width="1"
            height="7"
          ></rect>
          <rect
            id="bar4"
            transform="translate(9.500000, 5.000000) rotate(180.000000) translate(-9.500000, -5.000000) "
            x="9"
            y="3"
            width="1"
            height="4"
          ></rect>
        </g>
      </svg>
    </StyledEqualizer>
  );
}
