import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LightSwitch from './LightSwitch';

const StyledHeader = styled.header`
  position: absolute;
  z-index: 1021;
  width: 100%;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container fluid className="px-5 pt-5">
        <Row>
          <Col className="text-end">
            <LightSwitch />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
}
