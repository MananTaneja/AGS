const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Customer = require("../models/Customer");
const keys = require("../config/keys");
const passport = require("passport");

// jwt_payload - is the authorisation token
// this has all the data inside that was passed previously using the key

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Customer.findOne({
        where: {
          phoneNumber: jwt_payload.phoneNumber,
        },
      })
        .then((customer) => {
          if (customer) {
            return done(null, customer);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
