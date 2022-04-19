const passport = require("passport");
const facebookStrategy = require("passport-facebook");
const User = require("../model/user");
const axios = require('axios');

require("dotenv").config();

passport.use(
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/facebook/callback",
      profileFields: [
        "id",
        "displayName",
        "name",
        "gender",
        "picture.type(large)",
        "emails",
      ],
    },
    async function (token, refereshToken, profile, done) {
        let params = {
          fields: 'id,name,email,first_name,last_name,picture',
          access_token: token  
        }
        let url = 'https://graph.facebook.com/v3.2/me';
        const result = await axios.get(url, {params});
        console.log(result.data, 'me');
    //   console.log(profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  // User.findById({_id: id},function(err, user) {
  done(null, id);
  // });
});

module.exports = passport;
