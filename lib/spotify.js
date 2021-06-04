export async function getAccessToken() {
  const url =
    'https://accounts.spotify.com/api/token?' +
    new URLSearchParams({
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      grant_type: 'client_credentials',
    });

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  });

  return response.json();
}

export async function getSeveralTracks(accessToken, ids) {
  const url =
    '	https://api.spotify.com/v1/tracks?' +
    new URLSearchParams({
      ids,
    });

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'GET',
  });

  return response.json();
}
