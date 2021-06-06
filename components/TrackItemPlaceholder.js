import { TextRow, RectShape } from 'react-placeholder/lib/placeholders';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTheme } from 'styled-components';
import StyledTrackItem from '../styles/TrackItemStyles';

function SquarePlaceholder({ className, color }) {
  return (
    <Col className={className}>
      <div className="square ratio ratio-1x1">
        <RectShape color={color} />
      </div>
    </Col>
  );
}

function DetailsPlaceholder({ color }) {
  return (
    <Row>
      <Col>
        <TextRow
          color={color}
          style={{ width: '120px', height: '10px', marginTop: '8px' }}
        />
        <TextRow
          color={color}
          style={{ width: '80px', height: '10px', marginTop: '8px' }}
        />
        <TextRow
          color={color}
          style={{ width: '100px', height: '10px', marginTop: '8px' }}
        />
      </Col>
    </Row>
  );
}

function TrackItemPlaceholder() {
  const theme = useTheme();

  return (
    <StyledTrackItem className="show-loading-animation">
      <Row className="g-3">
        <SquarePlaceholder color={theme.loadingFill} className="album-col" />
        <SquarePlaceholder color={theme.loadingFill} />
        <SquarePlaceholder color={theme.loadingFill} />
        <SquarePlaceholder color={theme.loadingFill} />
        <SquarePlaceholder color={theme.loadingFill} />
      </Row>
      <DetailsPlaceholder color={theme.loadingFill} />
    </StyledTrackItem>
  );
}

export { TrackItemPlaceholder, SquarePlaceholder, DetailsPlaceholder };
