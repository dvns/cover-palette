import styled from 'styled-components';

const StyledTrackItem = styled.div`
  color: ${({ theme }) => theme.text};

  &:not(:first-child) {
    margin-top: 50px;
  }

  .track-details {
    margin-top: 10px;
    font-size: 1.2rem;
    p {
      margin: 0;
    }

    td {
      vertical-align: top;
    }

    .icon {
      margin-top: -4px;
      margin-right: 5px;
    }
  }

  .album-col {
    @media (max-width: 400px) {
      flex: 0 0 auto;
    }
  }

  .square {
    width: 100%;
    font-size: 1rem;
    transition: all 0.2s;

    @media (min-width: 576px) {
      font-size: 1.4rem;
    }
  }

  .album-cover {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
  }

  .color {
    display: inline-block;
    cursor: pointer;
    position: relative;

    /* @media (min-width: 500px) {
    } */

    button {
      width: 100%;
      height: 100%;
      transition: all 0.2s;
      border-radius: var(--border-radius);

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        height: 102%;
        width: 102%;
        opacity: 0;
        border-radius: var(--border-radius);
        background: inherit;
        filter: blur(8px);
        transition: all 0.2s;
      }

      &:hover {
        transform: scale(1.03);
        z-index: 1;
        &::after {
          opacity: 0.9;
        }
      }
    }

    .label {
      opacity: 0.5;
    }
  }
`;

export default StyledTrackItem;
