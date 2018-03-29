import axios from 'axios';
import { actions } from 'react-jplaylist';
import { FETCH_SEARCH_RESULTS, FETCH_RESULTS_METADATA } from './types';

export const playSelected = index => dispatch => {
  dispatch(actions.play('AmpliTubePlaylist', index));
};

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