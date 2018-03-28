const stream = require('youtube-audio-stream');

module.exports = app => {
  app.get('/api/audio/:videoId', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    stream(`youtube.com/watch?v=${req.params.videoId}`).pipe(res);
  });
};