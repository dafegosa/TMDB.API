import {
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_PLAYLIST,
  ADD_PLAYLIST,
} from '../utils/constants'
import { get } from '../utils/api'

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums,
})

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums,
})

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists,
})

export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists,
})

export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  playlists,
})

export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  playlists,
})

export const initiateGetResult = (searchMe) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchMe
      )}&type=album,playlist,artist`
      const result = await get(API_URL)
      const { albums, artists, playlists } = result
      dispatch(setAlbums(albums))
      dispatch(setArtists(artists))
      return dispatch(setPlayList(playlists))
    } catch (err) {
      console.error('error', err)
    }
  }
}

export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url)
      return dispatch(addAlbums(result.albums))
    } catch (err) {
      console.error('error', err)
    }
  }
}

export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url)
      return dispatch(addArtists(result.artists))
    } catch (err) {
      console.error('error', err)
    }
  }
}

export const initiateLoadMorePlaylist = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url)
      return dispatch(addPlaylist(result.playlists))
    } catch (err) {
      console.error('error', err)
    }
  }
}
