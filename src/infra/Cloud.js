// var host = "http://localhost:7000/v1";
var token_api = "kajhdlkJASTOKEN";
var host = "https://painel.server.online/v1";

module.exports = {
  getHost() {
    return host;
  },
  getToken() {
    return token_api;
  },
  logarFacebook(token, retorno) {
    this.post(
      "/loginFacebook",
      { fb_token: token, device_token: null },
      user => {
        retorno(user);
      },
      e => {
        console.log(e);
        retorno(null);
      }
    );
  },
  post(metodo, data, retorno) {
    var url = host + "/" + metodo;
    // console.log(url);
    var config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    if (token_api) {
      config.headers["x-request-id"] = token_api;
    }
    fetch(url, config)
      .then(response => response.text())
      .then(responseData => {
        try {
          responseData = JSON.parse(responseData);
        } catch (e) {
          console.log(responseData, url);
          responseData = {};
        }
        retorno(responseData);
      })
      .catch(error => {
        console.log("Erro http :" + url, config, error);
        retorno(null);
      });
  },
  get(metodo, data, retorno) {
    var url = host + "/" + metodo;
    // console.log(url);
    if (data) {
      url += "?";
      var lista = Object.keys(data);
      for (var i = 0; i < lista.length; i++) {
        var item = lista[i];
        if (i != 0) {
          url += "&";
        }
        url += "" + item + "&" + data[item];
      }
    }
    var config = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    if (token_api) {
      config.headers["x-request-id"] = token_api;
    }
    fetch(url, config)
      .then(response => response.text())
      .then(responseData => {
        try {
          responseData = JSON.parse(responseData);
        } catch (e) {
          console.log(responseData, url);
          responseData = {};
        }
        retorno(responseData);
      })
      .catch(error => {
        console.log("Erro http :" + url, config, error);
        retorno(null);
      });
  }
};
