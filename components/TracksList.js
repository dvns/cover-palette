import useSWR from 'swr';
import { useSession } from 'next-auth/client';
import TrackItem from './TrackItem';
import StyledTracksList from '../styles/TracksListStyles';

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
    <StyledTracksList>
      {currentTrack && <TrackItem track={currentTrack?.item} isCurrent />}
      {recentTracks?.items?.map((item) => (
        <TrackItem track={item.track} key={item.played_at} />
      ))}
    </StyledTracksList>
  );
}
