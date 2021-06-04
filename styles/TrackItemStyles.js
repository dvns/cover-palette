import styled from 'styled-components';

const StyledTrackItem = styled.li`
  margin: 20px 0;
  padding: 20px;
  max-width: 600px;
  border-radius: var(--border-radius);
  background: white;

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

    @media (min-width: 500px) {
      width: 140px;
      height: 140px;
    }
  }

  .colors {
    display: flex;
  }

  .color {
    height: 35px;
    flex-basis: 25%;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
    z-index: -1;
  }
`;

export default StyledTrackItem;
