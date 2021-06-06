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
import Blob from '../components/Blob';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function Home({ tracks }) {
  const [session, sessionLoading] = useSession();

  if (sessionLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />

      <Container fluid className="px-4 py-5" as="main">
        <Row className="gx-5">
          <Col lg={3} className="mb-5">
            <StyledSidebar className="sticky-top">
              <Blob />
              <Logo />
              {!session && <SignIn />}
            </StyledSidebar>
          </Col>
          <Col lg={8} className="mb-5">
            {!session && (
              <>
                {tracks?.map((track) => (
                  <TrackItem key={track.id} track={track} />
                ))}
                <SignIn className="text-center mt-5 mx-auto pt-5 pb-0 d-lg-none" />
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
