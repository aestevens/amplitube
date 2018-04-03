import axios from 'axios';
import { actions as playerActions } from 'react-jplayer';
import { actions as playlistActions } from 'react-jplaylist';
import { FETCH_SEARCH_RESULTS, FETCH_RESULTS_METADATA } from './types';

export const setMedia = media => dispatch => {
  dispatch(playerActions.setMedia('AmpliTubePlaylist', media));
};

export const playCurrentMedia = () => dispatch => {
  dispatch(playerActions.play('AmpliTubePlaylist'));
};

export const addMediaToPlaylist = media => (dispatch, getState) => {
  media.id = getState().jPlaylists.playlist.length;
  dispatch(playlistActions.add('AmpliTubePlaylist', media, false));
}

export const fetchSearchResults = searchValue => async dispatch => {
  const searchRes = await axios.get('/api/search', { params: { searchValue }});
  const idArray = searchRes.data.items.map( video => video.id.videoId );
  const id = idArray.join(',');
  const metadataRes = await axios.get('/api/search/metadata', { params: { id }});

  dispatch({ type: FETCH_SEARCH_RESULTS, payload: metadataRes.data.items });
}

export const fetchResultsMetadata = () => async (dispatch, getState) => {
  const id = getState().searchResults.join(',');
  const res = await axios.get('/api/search/metadata', { params: { id }});

  dispatch({ type: FETCH_RESULTS_METADATA, payload: res.data.items });
}