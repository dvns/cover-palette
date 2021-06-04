import useSWR from 'swr';
import { useSession } from 'next-auth/client';
import TrackItem from './TrackItem';
import StyledTracksList from '../styles/TracksListStyles';

const LIMIT = 10;
const RECENT_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=${LIMIT}`;

const getRecentTracks = async (accessToken) => {
  const response = await fetch(RECENT_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
};

export default function TracksList() {
  const [session, sessionLoading] = useSession();
  const { data, error } = useSWR(
    () => session.user.accessToken,
    getRecentTracks
  );

  // TO DO: error handling

  return (
    <StyledTracksList>
      {data?.items?.map((item) => (
        <TrackItem track={item.track} key={item.played_at} />
      ))}
    </StyledTracksList>
  );
}
