import { deserializeUser, serializeUser } from "passport";
import { Strategy } from "passport-facebook";
import { pusher } from "../app";
import { generateToken } from "../controllers/auth/generateToken";
import { environments } from "../environments/environments";
import UserModel from "../models/User.model";
import ui from "uniqid";
import AvatarModel from "../models/Avatar.model";

serializeUser((user, done) => {
  done(null, user);
});

deserializeUser((user, done) => {
  done(null, user as any);
});

const facebookStrategy = new Strategy(
  {
    clientID: environments.FB.FB_ID,
    clientSecret: environments.FB.FB_SECRET,
    callbackURL: "https://my-gallery.xyz/api/auth/facebook",
    profileFields: ["email", "displayName"],
  },
  async (token, refreshToken, profile, done) => {
    try {
      const { email, name } = profile?._json;
      const idAvatar = ui();
      const idUser = ui();
      if (email) {
        const user = await UserModel.findOne({
          where: {
            email,
          },
        });

        if (user) {
          pusher.trigger("my-gallery", "login-facebook", {
            token: generateToken(user),
            message: "User Logged",
          });
          return done(null, user);
        }
        return done(user);
      }

      const user = await UserModel.findOne({
        where: {
          fullName: name,
        },
      });

      if (user) {
        pusher.trigger("my-gallery", "login-facebook", {
          token: generateToken(user),
          message: "User Logged",
        });
        return done(null, user);
      }

      const newUser = await UserModel.create({
        id: idUser,
        email: email ? email : "",
        fullName: name,
        provider: "facebook",
      });

      await AvatarModel.create({
        id: idAvatar,
        secure_url: environments.DEFAULT.PHOTO,
        userId: idUser,
      });

      pusher.trigger("my-gallery", "register-facebook", {
        token: generateToken(newUser),
        message: "User Registered and Logged",
      });

      return done(null, newUser);
    } catch (err) {
      console.log(err.message);
      return done(err, false);
    }
  }
);

export default facebookStrategy;
