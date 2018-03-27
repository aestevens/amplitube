import { combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';

export default combineReducers({
  jPlayers,
  jPlaylists
})