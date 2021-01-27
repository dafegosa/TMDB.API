import { SET_TOPRATED, ADD_PLAYLIST } from '../utils/constants'

const playlistReducer = (state = {}, action) => {
  const { movies } = action
  switch (action.type) {
    case SET_TOPRATED:
      return movies
    case ADD_PLAYLIST:
      state = [...state, ...movies]
    default:
      return state
  }
}

export default playlistReducer
