import { combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';
import searchResultsReducer from './searchResultsReducer';

export default combineReducers({
  jPlayers,
  jPlaylists,
  searchResults: searchResultsReducer
})