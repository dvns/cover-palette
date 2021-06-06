import { signOut, useSession } from 'next-auth/client';
import { Flip, ToastContainer } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getAccessToken, getSeveralTracks } from '../lib/spotify';
import TracksList from '../components/TracksList';
import TrackItem from '../components/TrackItem';
import SignIn from '../components/SignIn';
import { StyledSidebar } from '../styles/SidebarStyles';

import Header from '../components/Header';

import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function Home({ tracks }) {
  const [session, sessionLoading] = useSession();
  console.log('# session: ', session);

  if (sessionLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />

      <Container fluid className="px-4 py-5" as="main">
        <Row className="gx-5">
          <Col lg={3} className="mb-5">
            <StyledSidebar className="sticky-top">
              <div className="d-flex flex-column flex-sm-row flex-lg-column">
                <div className="d-inline-block mx-auto mx-sm-0 me-sm-5 mb-5">
                  <Logo blob />
                </div>

                {!session && (
                  <div className="mx-auto ms-sm-5 ms-lg-0">
                    <SignIn className="text-sm-start" />
                  </div>
                )}

                {session && (
                  <div className="ms-sm-5 ms-lg-0">
                    <h2>
                      Hey <strong>{session.user?.name}</strong>! 👋
                    </h2>
                    <h2>
                      Here's some colour palettes based on music you've been
                      playing lately.
                    </h2>
                    <h2>
                      Click on the coloured squares to copy their HEX values.
                    </h2>
                  </div>
                )}
              </div>
            </StyledSidebar>
          </Col>
          <Col lg={8} className="mb-5">
            {!session && (
              <>
                {tracks?.map((track) => (
                  <TrackItem key={track.id} track={track} />
                ))}
                <SignIn className="mx-auto d-lg-none" />
              </>
            )}
            {session && <TracksList />}
          </Col>
        </Row>
      </Container>

      <Footer />

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
        transition={Flip}
      />
    </>
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
