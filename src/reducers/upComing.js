import { SET_UPCOMING, ADD_ALBUMS } from '../utils/constants'

const albumsReducer = (state = {}, action) => {
  const { movies } = action
  switch (action.type) {
    case SET_UPCOMING:
      return movies
    case ADD_ALBUMS:
      state.results = [...state.results, ...movies]
    default:
      return state
  }
}

export default albumsReducer
