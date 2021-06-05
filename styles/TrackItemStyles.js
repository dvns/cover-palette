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

  .square {
    display: inline-block;

    width: calc(20% - 7px);
    font-size: 1rem;
    transition: all 0.2s;

    &:not(:last-child) {
      margin-right: 8px;
    }

    @media (min-width: 576px) {
      font-size: 1.2rem;
    }
  }

  .album-cover {
    position: relative;
    overflow: hidden;
  }

  .color {
    display: inline-block;
    cursor: pointer;

    @media (min-width: 500px) {
      &:hover {
        transform: scale(1.1);
        z-index: 1;
      }
    }

    button {
      width: 100%;
      height: 100%;
    }

    .label {
      opacity: 0.5;
    }
  }
`;

export default StyledTrackItem;
