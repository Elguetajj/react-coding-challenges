import React, { Component, useContext, useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import SpotifyAPIContext from 'contexts/SpotifyAPIContext';
import useFetch from 'customHooks/useFetch';

function Discover() {
  const {is_authenticated, token, setToken} = useContext(SpotifyAPIContext)
  var { data : newReleasesData } = useFetch('https://api.spotify.com/v1/browse/new-releases', {headers: { Authorization: 'Bearer ' + token}})
  var {data : featuredPlaylistsData} = useFetch('https://api.spotify.com/v1/browse/featured-playlists', {headers: { Authorization: 'Bearer ' + token}})
  var {data : categoriesData } = useFetch('https://api.spotify.com/v1/browse/categories', {headers: { Authorization: 'Bearer ' + token}})  
  var newReleases = newReleasesData ? newReleasesData.albums.items : []
  var playlists = featuredPlaylistsData ? featuredPlaylistsData.playlists.items : []
  var categories = categoriesData ? categoriesData.categories.items : []
  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
    </div>
  );
}

export default Discover;