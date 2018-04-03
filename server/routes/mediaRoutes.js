const stream = require('youtube-audio-stream');
const request = require('request');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/audio/:videoId', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    stream(`youtube.com/watch?v=${req.params.videoId}`).pipe(res);
  });

  app.get('/api/search', (req, res) => {
    if (req.query.searchValue && typeof req.query.searchValue === 'string') {
      request({
        uri: 'https://www.googleapis.com/youtube/v3/search',
        qs: {
          part: 'snippet',
          maxResults: 25,
          key: keys.googleAPIKey,
          type: 'video',
          safeSearch: 'strict',
          q: req.query.searchValue
        }
      }).pipe(res);
    } else {
      res.writeHead(400, 'Improperly Formatted Request - Search Query Must Be a String');
      res.end();
    }
  });

  app.get('/api/search/metadata', (req, res) => {
    if (req.query.id && typeof req.query.id === 'string') {
      request({
        uri: 'https://www.googleapis.com/youtube/v3/videos',
        qs: {
          part: 'snippet,contentDetails,statistics',
          maxResults: 25,
          key: keys.googleAPIKey,
          id: req.query.id
        }
      }).pipe(res);
    } else {
      res.writeHead(400, 'Improperly Formatted Request - Video IDs Must Be in a String');
      res.end();
    }
  });
};