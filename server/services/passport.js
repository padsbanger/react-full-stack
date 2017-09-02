const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('../config/key')
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  })
})

passport.use(new GoogleStrategy({
  clientID: key.googleClientID,
  clientSecret: key.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({googleId: profile.id}).then((user) => {
    if(!user) {
      new User({googleId: profile.id})
        .save()
        .then(user => done(null, user));
    } else {
      done(null, user)
    }
  })
}));
