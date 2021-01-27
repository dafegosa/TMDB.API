import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import albumsReducer from '../reducers/upComing'
import artistsReducer from '../reducers/popular'
import playlistReducer from '../reducers/topRated'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store
