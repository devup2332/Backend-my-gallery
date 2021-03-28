import { deserializeUser, serializeUser } from "passport";
import { Strategy } from "passport-facebook";
import { environments } from "../environments/environments";

serializeUser((user, done) => {
  done(null, user);
});

deserializeUser((user, done) => {
  done(null, user as any);
});

const facebookStrategy = new Strategy(
  {
    clientID: environments.client_Id_facebook,
    clientSecret: environments.client_secret,
    callbackURL: "/api/register/facebook",
    profileFields: ["photos", "profileUrl", "name", "email", "displayName"],
    scopeSeparator: "photos,email,gender",
  },
  (token, refreshToken, profile, done) => {
    done(null, profile);
  }
);

export default facebookStrategy;
