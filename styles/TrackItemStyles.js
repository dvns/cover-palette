import styled from 'styled-components';

const StyledTrackItem = styled.li`
  padding: 20px;
  border-radius: var(--border-radius);
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);
  /* background: linear-gradient(to bottom right, #fff, #fff); */

  &:not(:first-child) {
    margin-top: 30px;
  }

  .track-info {
    display: flex;
    margin-bottom: 20px;
  }

  .track-details {
    margin-left: 20px;
    font-size: 1.4rem;
    p {
      margin: 0;
    }

    td {
      vertical-align: top;
    }

    .icon {
      margin-top: 2px;
    }
  }

  .album-cover {
    flex-shrink: 0;
    position: relative;
    width: 75px;
    height: 75px;
    border-radius: var(--border-radius);
    overflow: hidden;

    @media (min-width: 600px) {
      width: 120px;
      height: 120px;
    }
    /* @media (min-width: 800px) {
      width: 170px;
      height: 170px;
    } */
  }

  .colors {
    @media (min-width: 500px) {
      display: flex;
    }
  }

  .color {
    display: block;
    width: 100%;
    min-height: 35px;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    transition: all 0.2s;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }

    &:last-child {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    @media (min-width: 500px) {
      flex-basis: 25%;

      &:hover {
        transform: scale(1.1);
        z-index: 1;
      }

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: var(--border-radius);
      }
    }
  }
`;

export default StyledTrackItem;
