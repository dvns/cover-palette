import styled from 'styled-components';

const StyledTrackItem = styled.div`
  color: ${({ theme }) => theme.text};
  margin-bottom: 40px;

  .track-details {
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

    .soundbar {
      width: 1rem;
      height: auto;
      fill: ${({ theme }) => theme.text};
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

    img {
      opacity: 1;
      transition: all 0.2s;

      &.hide {
        opacity: 0;
      }
    }
  }

  .color {
    display: inline-block;
    position: relative;

    /* @media (min-width: 500px) {
    } */

    button {
      width: 100%;
      height: 100%;
      transition: all 0.2s;
      border-radius: var(--border-radius);

      &:hover {
        transform: scale(1.03);
        z-index: 1;
      }
    }

    .label {
      opacity: 0.5;
    }
  }
`;

export default StyledTrackItem;
