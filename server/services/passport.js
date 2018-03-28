const passport = require('passport');
const YouTubeV3Strategy = require('passport-youtube-v3').Strategy;
const keys = require('../config/dev');

passport.use(
  new YouTubeV3Strategy(
    {
      clientID: keys.youtubeClientID,
      clientSecret: keys.youtubeClientSecret,
      callbackURL: '/auth/youtube/callback',
      scope: [
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/youtube.force-ssl'
      ]
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      // console.log('profile', profile);
    }
  )
);