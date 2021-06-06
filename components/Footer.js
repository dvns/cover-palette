import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wave from './Wave';
import Logo from './Logo';

function currentYear() {
  const today = new Date();
  return today.getFullYear();
}

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  background: #f64824;
  margin-top: 250px;
  color: white;

  a {
    color: white;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: black;
      }
    }
  }

  p {
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
  }

  .wave {
    position: absolute;
    bottom: calc(100% - 1px);
    left: 0;
    width: 100%;
    height: 250px;
  }

  .logo {
    margin-bottom: 3rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Wave />
      <Container fluid className="pb-4 px-4">
        <Row className="gx-5">
          <Col lg={{ span: 8, offset: 3 }}>
            <Logo />
            <p>
              <a href="https://developer.spotify.com/" target="blank">
                Spotify API
              </a>
            </p>
            <p>
              <a href="https://github.com/dvns/cover-palette" target="blank">
                GitHub
              </a>
            </p>
            <p>
              <a href="https://davinsuen.com/" target="blank">
                &copy; {currentYear()} Davin Suen
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}
