import Head from 'next/head';
import { signOut, useSession } from 'next-auth/client';
import { ToastContainer, Zoom } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiSpotify } from 'react-icons/si';
import { getAccessToken, getSeveralTracks } from '../lib/spotify';
import TracksList from '../components/TracksList';
import TrackItem from '../components/TrackItem';
import SignIn from '../components/SignIn';
import { StyledSignOutButton } from '../styles/SignOutButtonStyles';
import { StyledSidebar } from '../styles/SidebarStyles';

import Header from '../components/Header';

export default function Home({ tracks }) {
  const [session, loading] = useSession();
  console.log('# Session: ', session);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>Cover Palettes</title>
        <meta
          name="description"
          content="Colours inspired by what you're listening to."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container fluid className="px-5 py-5" as="main">
        <Row className="gx-5">
          <Col lg={3} className="mb-5">
            <StyledSidebar className="sticky-top">
              <h1>
                Cover <br />
                Palettes
              </h1>
              {!session && <SignIn />}
              {session && (
                <>
                  <SiSpotify /> {session.user?.name}
                  <span className="mx-3">|</span>
                  <StyledSignOutButton onClick={() => signOut('spotify')}>
                    sign out
                  </StyledSignOutButton>
                </>
              )}
            </StyledSidebar>
          </Col>
          <Col lg={8} className="mb-5">
            {!session && (
              <>
                {tracks?.map((track) => (
                  <TrackItem key={track.id} track={track} />
                ))}
                <SignIn className="text-center my-5 mx-auto" />
              </>
            )}
            {session && <TracksList />}
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        transition={Zoom}
      />
    </div>
  );
}

export async function getStaticProps() {
  const accessToken = await getAccessToken();
  const ids = [
    '2EqlS6tkEnglzr7tkKAAYD', // beatles
    '0v9Wz8o0BT8DU38R4ddjeH', // chance
    '3hNywmR93yvj68y2zl8mRt', // busty
    '6g0Orsxv6glTJCt4cHsRsQ', // beyonce
    '41zXlQxzTi6cGAjpOXyLYH', // billie
  ];
  const items = await getSeveralTracks(
    accessToken.access_token,
    ids.toString()
  );

  return {
    props: {
      tracks: items.tracks,
    },
  };
}
