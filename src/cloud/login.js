import { Cloud } from "../infra";
// import md5 from "md5";
// import { Geo } from "../actions";



export function loginEmail(email, senha, callback) {
  Cloud.get(
    "login/dash/email",
    { email: email, senha: senha },
    (user,erro) => {

      if (user) {
        if (callback) callback(user,erro);
      } else {
        if (callback) callback(false,erro);
      }
    }
  );
}

export function loginPublico(callback) {
  // Cloud.get("login/publico",null,(user,erro) => {
  //   if (user) {
  //     buscarMunicipioUser(Geo.getGeo().latitude,Geo.getGeo().longitude, cidade => {
  //       if (callback) callback({...user,...Geo.getGeo(),id_municipio:cidade.id,municipio:cidade.nome},erro);
  //     });
  //   } else {
  //     if (callback) callback(false,erro);
  //   }
  // });
}



export function saveUser(token) {
  Cloud.setTokenUser(token);
  console.log(token);

}

export function initUser(callback) {
  var token = cookie.load("user");
  // console.log(token);
  if (token) {
    searchUser(token, res => {
      if (res) {
        if (callback) callback(res)
      } else {
        if (callback) callback(false)
      }
    });
  } else {
    if (callback) callback(false)
  }
}

function searchUser(token, callback) {
  if (token) {
    Cloud.get(
      "login/direto",
      {token},
      (data,erro) => {
        // console.log(data,erro);
        if (data && data.id) {
          if (callback) callback(data);
        } else {
          if (callback) callback(false);
        }
      }
    );
  } else {
    if (callback) callback(false);
  }
}

export function reenviarSenha(email, callback) {
  Cloud.get(
    "login/redefinir/senha/email",
    { email },
    re => {
      callback(re);
    }
  );
}

export function reenviarSenhaTelefone(email, callback) {
  Cloud.get(
    "login/redefinir/senha/telefone",
    { email },
    (re,erro) => {
      callback(re,erro);
    }
  );
}

export function loginFacebook(callback) {

  getFBToken(token => {
    console.log(token)
    if (token) {
      Cloud.get(
        "login/dash/facebook",
        { fb_token: token },
        (user,erro) => {
          // console.log(erro);
          console.log(5959,user, erro)
          if (user && !user.error) {
            Cloud.setTokenUser(user.token)
            callback(user);
          } else {
            if (user && user.options === 2) {
              alert("Não foi possível logar", user.error, [
                {
                  text: "Cadastrar uma empresa",
                  onPress: () => {
                    window.location.href = "/cadastro";
                  }
                },
                {
                  text: "Ok",
                  onPress: null
                }
              ]);
            } else if (user) {
              alert(user.error)
            }
            callback(false)
          }
        }
      );
    } else {
      callback(false)
    }
  });
}

function getFBToken(callback) {

  // const FBSDK = require("react-native-fbsdk");
  // const { LoginManager, AccessToken } = FBSDK;
  //
  // LoginManager.logInWithReadPermissions([
  //   "public_profile",
  //   "email",
  //   "user_friends"
  // ]).then(
  //   result => {
  //     // // console.log(result);
  //     if (result.isCancelled) {
  //       callback(null);
  //     } else {
  //       AccessToken.getCurrentAccessToken().then(accessToken => {
  //         callback(accessToken.accessToken);
  //       });
  //     }
  //   },
  //   error => {
  //     // console.log(error);
  //     callback(null);
  //   }
  // );
}

export function loginGoogle(userGoogle,callback) {
  Cloud.get("login/dash/google", userGoogle, (re,erro) => {
    // console.log(re,erro);
    if (re && re.id) {
      callback(re)
    } else {
      callback(false)
      // alert("Erro, tente novamente");
    }
  });
}
