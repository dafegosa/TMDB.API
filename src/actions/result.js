import {
  SET_UPCOMING,
  ADD_ALBUMS,
  SET_POPULAR,
  ADD_ARTISTS,
  SET_TOPRATED,
  ADD_PLAYLIST,
} from '../utils/constants'
import { get } from '../utils/api'

export const setUpComing = (movies) => ({
  type: SET_UPCOMING,
  movies,
})

export const addAlbums = (movies) => ({
  type: ADD_ALBUMS,
  movies,
})

export const setPopular = (movies) => ({
  type: SET_POPULAR,
  movies,
})

export const addArtists = (movies) => ({
  type: ADD_ARTISTS,
  movies,
})

export const setTopRated = (movies) => ({
  type: SET_TOPRATED,
  movies,
})

export const addPlaylist = (movies) => ({
  type: ADD_PLAYLIST,
  movies,
})

export const initiateGetUpComing = (n) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=85804518a9badfab854761cf1c4d70ff&language=es-ES&page=1`
      const result = await get(API_URL)
      return dispatch(setUpComing(result))
    } catch (err) {
      console.error('error', err)
    }
  }
}
export const initiateGetPopular = () => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=85804518a9badfab854761cf1c4d70ff&language=es-ES&page=1`
      const result = await get(API_URL)
      return dispatch(setPopular(result.results))
    } catch (err) {
      console.error('error', err)
    }
  }
}
export const initiateGetTopRated = () => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=85804518a9badfab854761cf1c4d70ff&language=es-ES&page=1`
      const result = await get(API_URL)
      return dispatch(setTopRated(result.results))
    } catch (err) {
      console.error('error', err)
    }
  }
}

export const initiateLoadMoreAlbums = (p) => {
  return async (dispatch) => {
    try {
      const result = await get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=85804518a9badfab854761cf1c4d70ff&language=es-ES&page=${p}`
      )
      return dispatch(addAlbums(result.results))
    } catch (err) {
      console.error('error', err)
    }
  }
}

export const initiateLoadMoreArtists = (p) => {
  return async (dispatch) => {
    try {
      const result = await get(
        `https://api.themoviedb.org/3/movie/popular?api_key=85804518a9badfab854761cf1c4d70ff&language=es-ES&page=${p}`
      )
      return dispatch(addArtists(result.results))
    } catch (err) {
      console.error('error', err)
    }
  }
}

export const initiateLoadMorePlaylist = (p) => {
  return async (dispatch) => {
    try {
      const result = await get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=85804518a9badfab854761cf1c4d70ff&language=es-ES&page=${p}`
      )
      return dispatch(addPlaylist(result.results))
    } catch (err) {
      console.error('error', err)
    }
  }
}
