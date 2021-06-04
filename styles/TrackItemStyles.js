import styled from 'styled-components';

const StyledTrackItem = styled.li`
  margin: 30px 0;
  padding: 20px;
  /* max-width: 600px; */
  border-radius: var(--border-radius);
  color: white;
  background: rgba(255, 255, 255, 0.05);
  /* background: white; */
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);

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
      margin-top: 3px;
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
      width: 140px;
      height: 140px;
    }
    @media (min-width: 800px) {
      width: 170px;
      height: 170px;
    }
  }

  .colors {
    @media (min-width: 500px) {
      display: flex;
    }
  }

  .color {
    width: 100%;
    min-height: 35px;
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
