import useSWR from 'swr';
import { useSession } from 'next-auth/client';
import TrackListItem from './TrackListItem';

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
  const { data, error } = useSWR(session.user.accessToken, getRecentTracks);
  return (
    <ul>
      {data?.items.map((item) => (
        <TrackListItem track={item.track} key={item.played_at} />
      ))}
    </ul>
  );
}
