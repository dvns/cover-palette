import { usePalette } from 'color-thief-react';
import StyledTrackItem from '../styles/TrackItemStyles';
import Image from 'next/image';
import { MdAlbum, MdMusicNote, MdPerson } from 'react-icons/md';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mostReadable } from '@ctrl/tinycolor';

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
    toast.success('Color copied to clipboard!');
  };

  return (
    <StyledTrackItem>
      <div className="track-info">
        <div className="album-cover">
          <Image
            src={albumCover.url}
            alt={track.album.name}
            layout="fill"
            objectFit="cover"
          />
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
      </div>
      <div className="palette">
        {paletteLoading && <p>Loading...</p>}
        {paletteError && <p>There was an error...</p>}
        {paletteData && (
          <div className="colors">
            {paletteData.map((color) => (
              <CopyToClipboard
                text={color.toUpperCase()}
                key={color}
                onCopy={notify}
              >
                <button
                  style={{
                    backgroundColor: color,
                    color: mostReadable(color, ['#fff', '#000']),
                  }}
                  className="color"
                >
                  {color.toUpperCase()}
                </button>
              </CopyToClipboard>
            ))}
          </div>
        )}
      </div>
    </StyledTrackItem>
  );
}
