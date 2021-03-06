import styled from 'styled-components';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/client';
import Dropdown from 'react-bootstrap/Dropdown';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoPersonCircle } from 'react-icons/io5';
import * as ga from '../lib/ga';

const StyledProfile = styled.div`
  --spacer: 10px;
  display: inline-block;
  .profile-image {
    width: 30px;
    margin-right: var(--spacer);
  }

  .profile-name {
    margin-right: var(--spacer);
  }

  #profile-dropdown {
    .dropdown-toggle {
      background: none;
      border: none;
      color: ${({ theme }) => theme.text};
      font-size: 1.6rem;
      padding-left: 0;
    }
    .dropdown-menu {
      font-size: 1.6rem;
      z-index: 1021;
    }
  }

  .icon {
    margin-top: -4px;
  }
`;

export default function Profile() {
  const [session, sessionLoading] = useSession();

  if (!session?.user) return null;

  return (
    <StyledProfile>
      <Dropdown id="profile-dropdown">
        <Dropdown.Toggle className="d-flex align-items-center">
          <div className="profile-image rounded-circle overflow-hidden">
            <div className="ratio ratio-1x1">
              {session.user?.image ? (
                <Image
                  src={session.user?.image}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <IoPersonCircle />
              )}
            </div>
          </div>
          <div className="profile-name">{session.user?.name}</div>
        </Dropdown.Toggle>

        <Dropdown.Menu alignRight>
          <Dropdown.Item
            href={`https://open.spotify.com/user/${session.user?.id}`}
            target="blank"
            onClick={() => {
              ga.event({
                action: 'button_click',
                params: {
                  category: 'Spotify',
                  label: 'View Profile',
                },
              });
            }}
          >
            View Profile <HiOutlineExternalLink className="icon" />
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              signOut('spotify');

              ga.event({
                action: 'button_click',
                params: {
                  category: 'Spotify',
                  label: 'Sign out',
                },
              });
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </StyledProfile>
  );
}
