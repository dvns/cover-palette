import Link from 'next/link';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdArrowBack } from 'react-icons/md';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SquarePlaceholder } from '../components/TrackItemPlaceholder';
import { StyledButton } from '../styles/ButtonStyles';

const Styled404 = styled.div`
  .hex-code {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0.5;
    text-align: center;
  }

  .square-container {
    width: 200px;
    position: relative;
    margin-bottom: 5rem;
  }

  .oops {
    font-weight: 900;
  }

  .back-button {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

export default function Custom404() {
  return (
    <Styled404 className="min-vh-100 d-flex flex-column">
      <Header />
      <Container fluid className="p-4 my-4 flex-grow-1">
        <Row className="gx-5">
          <Col className="d-flex flex-column align-items-center">
            <div className="square-container">
              <SquarePlaceholder color={'#404'} />
              <span className="hex-code">#404</span>
            </div>
            <h1 className="oops">OOOPS...</h1>
            <h2 className="mb-5">The colour exists, but not the page.</h2>
            <Link href="/">
              <StyledButton className="back-button">
                <MdArrowBack /> Go back
              </StyledButton>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Styled404>
  );
}
