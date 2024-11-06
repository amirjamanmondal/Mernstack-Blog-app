import LocalStrategy from "passport-local";
import User from "../models/User.js";
import bcrypt from "bcrypt";

function initializePassport(passport) {
  passport.use(
    new LocalStrategy(async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) return done(null, false);
        if (!bcrypt.compare(password, user.password || ""))
          return done(null, false);

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById({ id });
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
}

export default initializePassport;
