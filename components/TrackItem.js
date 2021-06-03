import { usePalette } from 'color-thief-react';
import StyledTrackItem from '../styles/TrackItemStyles';

const colorCount = 4;
const format = 'hex';
const crossOrigin = 'anonymous';
const quality = 10;

export default function TrackItem({ track }) {
  const albumCover = track.album.images[1];
  const {
    data: paletteData,
    loading: paletteLoading,
    error: paletteError,
  } = usePalette(albumCover.url, colorCount, format, {
    crossOrigin,
    quality,
  });

  return (
    <StyledTrackItem>
      {/* {paletteData && (
        <div
          className="background"
          style={{
            background: `linear-gradient(to bottom right, ${paletteData[0]}, ${paletteData[1]})`,
          }}
        ></div>
      )} */}
      <div className="track-info">
        <img className="album-cover" src={albumCover.url} alt="" width={100} />
        <div className="track-details">
          <p className="track-name">{track.name}</p>
          <p className="artist">
            {track.artists.map(
              (artist, index) =>
                `${artist.name}${
                  track.artists.length - 1 === index ? '' : ', '
                }`
            )}
          </p>
          <p className="album-name">{track.album.name}</p>
        </div>
      </div>
      <div className="palette">
        {paletteLoading && <p>Loading...</p>}
        {paletteError && <p>There was an error...</p>}
        {paletteData && (
          <div className="colors">
            {paletteData.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className="color"
              >
                {color}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledTrackItem>
  );
}
