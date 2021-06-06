import Image from 'next/image';
import { usePalette } from 'color-thief-react';
import { mostReadable } from '@ctrl/tinycolor';
import { useTheme } from 'styled-components';
import { MdAlbum, MdMusicNote, MdPerson } from 'react-icons/md';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StyledTrackItem from '../styles/TrackItemStyles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Soundbars from './Soundbars';

const colorCount = 4;
const format = 'hex';
const crossOrigin = 'anonymous';
const quality = 10;

const PlaceholderSquare = () => {
  const theme = useTheme();

  return (
    <Col>
      <div
        className="square color ratio ratio-1x1"
        style={{ background: theme.loadingFill }}
      />
    </Col>
  );
};

export default function TrackItem({ track, isCurrent }) {
  const albumCover = track.album.images[0];

  const {
    data: paletteData,
    loading: paletteLoading,
    error: paletteError,
  } = usePalette(albumCover.url, colorCount, format, {
    crossOrigin,
    quality,
  });

  const notify = () => {
    toast.success('Copied colour to clipboard!');
  };

  return (
    <StyledTrackItem>
      <div className="track-info">
        {paletteError && <p>There was an error...</p>}
        <Row className="g-3">
          <Col className="album-col">
            <div className="square album-cover ratio ratio-1x1">
              <Image
                src={albumCover.url}
                alt={track.album.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Col>
          {paletteLoading && (
            <>
              <PlaceholderSquare />
              <PlaceholderSquare />
              <PlaceholderSquare />
              <PlaceholderSquare />
            </>
          )}
          {paletteData &&
            paletteData.map((color) => (
              <Col key={color}>
                <CopyToClipboard text={color.toUpperCase()} onCopy={notify}>
                  <div className="square color ratio ratio-1x1">
                    <button
                      style={{
                        backgroundColor: color,
                        color: mostReadable(color, ['#fff', '#000']),
                      }}
                    >
                      <span className="label">{color.toUpperCase()}</span>
                    </button>
                  </div>
                </CopyToClipboard>
              </Col>
            ))}
        </Row>
      </div>
      <div className="track-details">
        <table>
          <tbody>
            {isCurrent && (
              <tr>
                <td>
                  <Soundbars className="icon soundbar" />
                </td>
                <td>Currently playing</td>
              </tr>
            )}
            <tr>
              <td>
                <MdMusicNote className="icon" />
              </td>
              <td>
                <p className="track-name">{track.name}</p>
              </td>
            </tr>
            <tr>
              <td>
                <MdPerson className="icon" />
              </td>
              <td>
                <p className="artist">
                  {track.artists.map(
                    (artist, index) =>
                      `${artist.name}${
                        track.artists.length - 1 === index ? '' : ', '
                      }`
                  )}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <MdAlbum className="icon" />
              </td>
              <td>
                <p className="album-name">{track.album.name}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledTrackItem>
  );
}
