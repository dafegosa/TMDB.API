import { SET_POPULAR, ADD_ARTISTS } from '../utils/constants'

const artistsReducer = (state = {}, action) => {
  const { movies } = action
  switch (action.type) {
    case SET_POPULAR:
      return movies
    case ADD_ARTISTS:
      state = [...state, ...movies]
    default:
      return state
  }
}

export default artistsReducer
