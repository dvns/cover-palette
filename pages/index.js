import { useSession } from 'next-auth/client';
import { Flip, ToastContainer } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlaceholder from 'react-placeholder';
import { useTheme } from 'styled-components';
import { getAccessToken, getSeveralTracks } from '../lib/spotify';
import TracksList from '../components/TracksList';
import TrackItem from '../components/TrackItem';
import SignIn from '../components/SignIn';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { StyledSidebar } from '../styles/SidebarStyles';

export default function Home({ tracks }) {
  const theme = useTheme();
  const [session, sessionLoading] = useSession();

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
                <ReactPlaceholder
                  type="text"
                  ready={!sessionLoading}
                  rows={5}
                  color={theme.loadingFill}
                  showLoadingAnimation={true}
                  className="mx-auto ms-sm-5 ms-lg-0"
                  style={{ maxWidth: '350px' }}
                >
                  {!session?.user && (
                    <div className="mx-auto ms-sm-5 ms-lg-0 mb-5">
                      <SignIn className="text-sm-start" />
                    </div>
                  )}
                  {session?.user && (
                    <div className="mx-auto ms-sm-5 ms-lg-0 text-center text-sm-start">
                      <p>
                        Hey <strong>{session.user?.name}</strong>! 👋
                      </p>
                      <p>
                        Here's some colour palettes based on music you've been
                        playing lately.
                      </p>
                      <p>
                        Click on the coloured squares to copy their HEX values.
                      </p>
                    </div>
                  )}
                </ReactPlaceholder>
              </div>
            </StyledSidebar>
          </Col>
          <Col lg={8} className="mb-5">
            {!session && (
              <>
                {tracks?.map((track) => (
                  <TrackItem key={track.id} track={track} />
                ))}
                <SignIn className="mx-auto d-lg-none pt-5" />
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
    '4iJyoBOLtHqaGxP12qzhQI', // bieber
    '41zXlQxzTi6cGAjpOXyLYH', // billie
    '0v9Wz8o0BT8DU38R4ddjeH', // chance
    // '1z6WtY7X4HQJvzxC4UgkSf', // beyonce
    '2EqlS6tkEnglzr7tkKAAYD', // beatles
    '5hM5arv9KDbCHS0k9uqwjr', // tame
    // '3hNywmR93yvj68y2zl8mRt', // busty
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
