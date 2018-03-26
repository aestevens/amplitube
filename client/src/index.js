import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';
import App from './App';

// Styles the jPlaylist to look nice
import 'react-jplaylist/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplaylist/src/less/controls/iconControls.less';
import './index.css';

const store = createStore(combineReducers({ jPlayers, jPlaylists }));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
