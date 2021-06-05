import styled from 'styled-components';

export const StyledLightSwitch = styled.button`
  --width: 60px;
  --height: 30px;
  position: relative;
  width: var(--width);
  height: var(--height);
  background-color: white;
  border-radius: calc(var(--height) / 2);
  overflow: hidden;

  .ripple.dark {
    z-index: 1;
    transform: scale(4.8);
    transition: 0.6s ease;
  }

  .ripple.light {
    z-index: 2;
    transform: scale(1);
    transition: z-index 0s 0.6s ease, transform 0s ease;
  }

  &.checked {
    background-color: black;
    animation: changeColor 0.6s ease forwards;

    @keyframes changeColor {
      80% {
        background-color: black;
      }
      80.01% {
        background-color: white;
      }
      100% {
        background-color: white;
      }
    }

    .ripple.dark {
      z-index: 2;
      transform: scale(1);
      transition: z-index 0s 0.6s ease, transform 0s ease;
    }

    .ripple.light {
      z-index: 1;
      transform: scale(4.8);
      transition: 0.6s ease;
    }
  }

  .toggle {
    width: calc(var(--height) - 4px);
    height: calc(var(--height) - 4px);

    position: absolute;
    top: 2px;

    border-radius: 50%;

    z-index: 5;

    &.dark {
      background-color: black;
      color: ${({ theme }) => theme.text};
      left: 2px;
    }

    &.light {
      background-color: white;
      color: ${({ theme }) => theme.text};
      right: 2px;
    }
  }

  .ripple {
    width: calc(var(--height) - 4px);
    height: calc(var(--height) - 4px);

    position: absolute;
    top: 2px;

    border-radius: 50%;

    &.dark {
      background-color: black;
      left: 2px;
    }

    &.light {
      background-color: white;
      right: 2px;
    }
  }
`;
