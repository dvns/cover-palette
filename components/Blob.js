import styled from 'styled-components';

const StyledBlob = styled.div`
  --background_color: #000;
  --time: 30s;

  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
  background: linear-gradient(to right, #d857ff, #ff4603);
  background-size: 500% 100%;
  animation: blobber var(--time) 0s linear infinite,
    cobler var(--time) 0s linear infinite alternate;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    mix-blend-mode: multiply;
    animation: blobber var(--time) 0s ease-in-out infinite,
      wobbler 15s 0s linear infinite alternate;
  }

  @keyframes blobber {
    0% {
      border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
    }
    5% {
      border-radius: 48% 52% 41% 59% / 66% 37% 63% 34%;
    }
    10% {
      border-radius: 69% 31% 71% 29% / 67% 31% 69% 33%;
    }
    15% {
      border-radius: 60% 40% 71% 29% / 63% 65% 35% 37%;
    }
    20% {
      border-radius: 61% 39% 51% 49% / 57% 58% 42% 43%;
    }
    25% {
      border-radius: 66% 34% 25% 75% / 47% 30% 70% 53%;
    }
    30% {
      border-radius: 32% 68% 38% 62% / 65% 60% 40% 35%;
    }
    35% {
      border-radius: 63% 37% 41% 59% / 35% 38% 62% 65%;
    }
    40% {
      border-radius: 57% 43% 49% 51% / 55% 71% 29% 45%;
    }
    45% {
      border-radius: 47% 53% 34% 66% / 65% 36% 64% 35%;
    }
    50% {
      border-radius: 44% 56% 32% 68% / 69% 26% 74% 31%;
    }
    55% {
      border-radius: 28% 72% 37% 63% / 71% 44% 56% 29%;
    }
    60% {
      border-radius: 38% 62% 35% 65% / 74% 53% 47% 26%;
    }
    65% {
      border-radius: 73% 27% 46% 54% / 54% 47% 53% 46%;
    }
    70% {
      border-radius: 75% 25% 47% 53% / 49% 53% 47% 51%;
    }
    75% {
      border-radius: 62% 38% 43% 57% / 55% 60% 40% 45%;
    }
    80% {
      border-radius: 41% 59% 65% 35% / 73% 50% 50% 27%;
    }
    85% {
      border-radius: 55% 45% 57% 43% / 73% 61% 39% 27%;
    }
    90% {
      border-radius: 74% 26% 33% 67% / 40% 65% 35% 60%;
    }
    95% {
      border-radius: 58% 42% 57% 43% / 53% 45% 55% 47%;
    }
    100% {
      border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
    }
  }

  @keyframes cobler {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;

export default function Blob() {
  return <StyledBlob className="blob"></StyledBlob>;
}
