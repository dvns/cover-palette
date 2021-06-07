import React, { useState } from 'react';
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
import Equalizer from './Equalizer';
import { SquarePlaceholder } from './TrackItemPlaceholder';
import * as ga from '../lib/ga';

const colorCount = 4;
const format = 'hex';
const crossOrigin = 'anonymous';
const quality = 1;

export default function TrackItem({ track, isCurrent }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const theme = useTheme();
  const albumCover = track.album.images[0];

  const {
    data: paletteData,
    loading: paletteLoading,
    error: paletteError,
  } = usePalette(albumCover.url, colorCount, format, {
    crossOrigin,
    quality,
  });

  const notify = (color) => {
    toast.success('Copied colour to clipboard!');
    ga.event({
      action: 'copy_colour',
      params: {
        category: 'Album',
        label: track.album.name,
        album_id: track.album.id,
        colour: color,
      },
    });
  };

  return (
    <StyledTrackItem>
      <Row className="g-3">
        <Col className="album-col">
          <div
            className="square album-cover ratio ratio-1x1"
            style={{ background: theme.loadingFill }}
          >
            <Image
              src={albumCover.url}
              alt={track.album.name}
              layout="fill"
              objectFit="cover"
              onLoad={(event) => {
                const target = event.target;
                // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
                if (target.src.indexOf('data:image/gif;base64') < 0) {
                  setImageIsLoaded(true);
                }
              }}
              className={imageIsLoaded ? '' : 'hide'}
            />
          </div>
        </Col>
        {paletteLoading && (
          <>
            <SquarePlaceholder color={theme.loadingFill} />
            <SquarePlaceholder color={theme.loadingFill} />
            <SquarePlaceholder color={theme.loadingFill} />
            <SquarePlaceholder color={theme.loadingFill} />
          </>
        )}

        {paletteData &&
          paletteData.map((color) => (
            <Col key={color}>
              <CopyToClipboard
                text={color.toUpperCase()}
                onCopy={() => notify(color)}
              >
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
      <Row className="track-details">
        <Col>
          <table>
            <tbody>
              {isCurrent && (
                <tr>
                  <td>
                    <Equalizer className="icon soundbar" />
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
        </Col>
      </Row>
    </StyledTrackItem>
  );
}
