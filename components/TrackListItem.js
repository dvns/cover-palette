import { usePalette } from 'color-thief-react';

const colorCount = 4;
const format = 'hex';
const crossOrigin = 'anonymous';
const quality = 10;

export default function TrackListItem({ track }) {
  const {
    data: colors,
    loading,
    error,
  } = usePalette(track.album.images[1].url, colorCount, format, {
    crossOrigin,
    quality,
  });

  return (
    <div>
      <p>{track.name}</p>
      <img src={track.album.images[1].url} alt="" width={100} />
      {colors && (
        <ul>
          {colors.map((color) => (
            <li key={color} style={{ backgroundColor: color }}>
              {color}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
