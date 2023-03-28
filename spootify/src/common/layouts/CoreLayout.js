import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import SpotifyAPIContext from 'contexts/SpotifyAPIContext'

function CoreLayout({ children , history }) {

  let [token, setToken] = useState(window.localStorage.getItem("token"))
  
  let [is_authenticated, set_is_authenticated] = useState(Boolean(token))
  
  return (
    <SpotifyAPIContext.Provider value={{is_authenticated, set_is_authenticated, token, setToken}}>
      <div className="main">
        <SideBar />
        <div className="main__content">
          <Header history={history} />
          <div className="main__content__child">
            {children}
          </div>
        </div>
        <Player />
      </div>
    </SpotifyAPIContext.Provider>

  );
}

export default CoreLayout;
