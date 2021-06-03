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
    p {
      margin: 0;
    }
  }

  .album-cover {
    border-radius: var(--border-radius);
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
