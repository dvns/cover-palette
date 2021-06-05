import Image from 'next/image';
import { usePalette } from 'color-thief-react';
import { mostReadable } from '@ctrl/tinycolor';
import { MdAlbum, MdMusicNote, MdPerson } from 'react-icons/md';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StyledTrackItem from '../styles/TrackItemStyles';

const colorCount = 4;
const format = 'hex';
const crossOrigin = 'anonymous';
const quality = 10;

export default function TrackItem({ track, isCurrent }) {
  const albumCover = track.album.images[1];

  const {
    data: paletteData,
    loading: paletteLoading,
    error: paletteError,
  } = usePalette(albumCover.url, colorCount, format, {
    crossOrigin,
    quality,
  });

  const notify = () => {
    toast.success('Colour copied to clipboard!');
  };

  return (
    <StyledTrackItem>
      <div className="track-info">
        <div className="square album-cover ratio ratio-1x1">
          <Image
            src={albumCover.url}
            alt={track.album.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {paletteLoading && <p>Loading...</p>}
        {paletteError && <p>There was an error...</p>}
        {paletteData &&
          paletteData.map((color) => (
            <CopyToClipboard
              text={color.toUpperCase()}
              key={color}
              onCopy={notify}
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
          ))}
      </div>
      <div className="track-details">
        <table>
          <tbody>
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
