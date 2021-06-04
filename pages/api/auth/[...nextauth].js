import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token) {
  try {
    const url =
      'https://accounts.spotify.com/api/token?' +
      new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Spotify({
      scope: 'user-read-recently-played user-read-currently-playing',
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      debug: true,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt(token, user, account) {
      // Initial sign in
      if (account && user) {
        console.log('# Initial sign in');
        console.log({ token, user, account });
        return {
          accessToken: account.accessToken,
          accessTokenExpires: Date.now() + account.expires_in * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('# Token has not expired yet. Return previous token.');
        return token;
      }

      // Access token has expired, try to update it
      console.log('Access token has expired, try to update it');
      return refreshAccessToken(token);
    },
    async session(session, token) {
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }

      // console.log('# Session callback');
      // console.log({ session, token });

      return session;
    },
  },
});
