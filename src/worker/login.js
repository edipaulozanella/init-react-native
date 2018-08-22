import { Cloud } from "../infra";
import { AsyncStorage, Platform } from "react-native";
import md5 from "react-native-md5";

export function loginFacebook(token, callback) {
  Cloud.post("login/facebook", { fb_token: token }, (res, error) => {
    if (callback) callback(res, error);
  });
}

export function fb(callback) {
  const FBSDK = require("react-native-fbsdk");
  const { LoginManager, AccessToken } = FBSDK;
  LoginManager.logInWithReadPermissions([
    "public_profile",
    "email",
    "user_friends"
  ]).then(
    result => {
      if (result.isCancelled) {
        callback(null);
      } else {
        AccessToken.getCurrentAccessToken().then(accessToken => {
          callback(accessToken.accessToken);
        });
      }
    },
    error => {
      callback(null);
    }
  );
}

export function loginEmail(email, password, callback) {
  password = md5(password);
  Cloud.get("login/google", { email, password }, (res, error) => {
    if (callback) callback(res, error);
  });
}
export function loginGoogle(nome, email, foto, idGoogle, callback) {
  Cloud.get("login/google", { nome, email, foto, idGoogle }, (res, error) => {
    if (callback) callback(res, error);
  });
}

export function updateInstalacao(token, id_user, callback) {
  //  console.log(token,id_user)
  Cloud.put(
    "instalacao",
    { token: token, id_user: id_user ? id_user : 0, plataforma: Platform.OS },
    (res, error) => {
      // console.log(res)
      if (callback) callback(res, error);
    }
  );
}

export function loadUser(callback) {
  AsyncStorage.getItem("reduxUser", (err, result) => {
    if (result) {
      try {
        var user = JSON.parse(result);
        // user.id = 80
        if (callback) callback(user);
      } catch (e) {
        if (callback) callback(user);
      }
    }
  });
}
export function cacheUser(user) {
  try {
    AsyncStorage.setItem("reduxUser", user ? JSON.stringify(user) : "");
  } catch (e) {}
}
