const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/youtube',
    passport.authenticate('youtube')
  );

  app.get('/auth/youtube/callback', passport.authenticate('youtube'));

};