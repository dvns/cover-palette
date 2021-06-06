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
    &:hover {
      color: black;
    }
  }

  p {
    font-size: 1.4rem;
  }

  .wave {
    position: absolute;
    bottom: calc(100% - 1px);
    left: 0;
    width: 100%;
    height: 250px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Wave />
      <Container fluid className="pb-5 px-5">
        <Row className="gx-5">
          <Col lg={{ span: 8, offset: 3 }}>
            <Logo />
            <Row>
              <Col md={4}>
                <p>&copy; {currentYear()} Cover Palettes</p>
              </Col>
              <Col md={4} className="text-md-center">
                <p>
                  Made by{' '}
                  <a href="https://davinsuen.com/" target="blank">
                    Davin Suen
                  </a>
                </p>
              </Col>
              <Col md={4} className="text-md-end">
                <p>
                  See it on{' '}
                  <a
                    href="https://github.com/dvns/cover-palette"
                    target="blank"
                  >
                    GitHub
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}
