import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LightSwitch from './LightSwitch';
import Profile from './Profile';

const StyledHeader = styled.header`
  /* position: absolute; */
  width: 100%;
  /* pointer-events: none; */

  @media (min-width: 992px) {
    /* position: fixed; */
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container fluid className="px-4 py-4">
        <Row>
          <Col className="text-sm-end">
            <Profile />
          </Col>
          <Col xs="auto" className="text-end">
            <LightSwitch />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
}
