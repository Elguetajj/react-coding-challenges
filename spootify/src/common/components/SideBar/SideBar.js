import React, { useContext } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import useSpotifyAPI from 'customHooks/useSpotifyAPI';
import SpotifyAPIContext from 'contexts/SpotifyAPIContext';

function renderSideBarOption(link, icon, text, { selected } = {}) {
  return (
    <div
      className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
}

export default function SideBar() {
  const {is_authenticated, set_is_authenticated, token, setToken} = useContext(SpotifyAPIContext)
  const {authenticate, logout} = useSpotifyAPI({is_authenticated, set_is_authenticated, token, setToken})
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        {
          is_authenticated 
          ? <>
              <p>Bob Smith</p> 
              <button onClick={logout}>logout</button>
            </>
          : <button onClick={authenticate}>
              authenticate
            </button>
        }
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: true })}
        {renderSideBarOption('/search', faSearch, 'Search')}
        {renderSideBarOption('/favourites', faHeart, 'Favourites')}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
        {renderSideBarOption('/charts', faStream, 'Charts')}
      </div>
    </div>
  );
}
