import moment from 'moment';
import { FETCH_SEARCH_RESULTS, FETCH_RESULTS_METADATA } from '../actions/types';

export default function (state = [], action) {
	switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      const getDuration = duration => {
        const hours = moment.duration(duration).hours();
        const minutes = moment.duration(duration).minutes();
        const seconds = moment.duration(duration).seconds();
        const getHours = hours => hours ? `${hours}:` : '';
        const getMinutes = minutes => hours && minutes < 10 ? `0${minutes}:` : `${minutes}:`;
        const getSeconds = seconds => seconds < 10 ? `0${seconds}` : seconds;
        return (getHours(hours) + getMinutes(minutes) + getSeconds(seconds)) || '0:00';
      }
      return action.payload.map( (video, index) => {
        return {
          sources: { mp3: `api/audio/${video.id}`},
          id: index,
          title: video.snippet.title,
          artist: video.snippet.channelTitle,
          poster: video.snippet.thumbnails.high.url,
          duration: getDuration(video.contentDetails.duration),
          viewCount: video.statistics.viewCount
        }
      });
		default:
			return state;
	}
}