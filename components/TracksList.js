import useSWR from 'swr';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { useSession } from 'next-auth/client';
import TrackItem from './TrackItem';
import { TrackItemPlaceholder } from './TrackItemPlaceholder';

const LIMIT = 10;
const RECENT_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=${LIMIT}`;
const CURRENT_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const fetchData = async (url, accessToken) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
};

const placeholderCount = [...Array(LIMIT).keys()];

export default function TracksList() {
  const [session, sessionLoading] = useSession();
  const {
    data: recentTracks,
    error: recentTracksError,
    loading: recentTracksLoading,
  } = useSWR(() => [RECENT_TRACKS_ENDPOINT, session.accessToken], fetchData);
  const {
    data: currentTrack,
    error: currentTrackError,
    loading: currentTrackLoading,
  } = useSWR(() => [CURRENT_TRACK_ENDPOINT, session.accessToken], fetchData);

  // TO DO: error handling
  return (
    <>
      {!currentTrackError && (
        <ReactPlaceholder
          customPlaceholder={<TrackItemPlaceholder />}
          ready={currentTrack}
        >
          <TrackItem track={currentTrack?.item} isCurrent />
        </ReactPlaceholder>
      )}
      {!recentTracksError && (
        <>
          {placeholderCount.map((n) => {
            return (
              <ReactPlaceholder
                key={n}
                customPlaceholder={<TrackItemPlaceholder />}
                ready={recentTracks}
              >
                <></>
              </ReactPlaceholder>
            );
          })}

          {recentTracks?.items?.map((item) => (
            <TrackItem track={item.track} key={item.played_at} />
          ))}
        </>
      )}
    </>
  );
}
