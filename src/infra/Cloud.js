var host = "http://192.168.1.101:5000/v1";
  var host = "http://localhost:5000/v1";
// var host = "https://api.meu.training/v1";
var token_api = "fajsdflkj";
var token_user = "";

module.exports = {
  getHost() {
    return host;
  },
  getToken() {
    return token_api;
  },
  setTokenUser(token) {
    token_user = token;
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
    if (token_user) {
      config.headers["token-user"] = token_user;
    }
    fetch(url, config)
      .then(response => {
        this.resolverResponse(response, retorno);
      })
      .catch(error => {
        if (retorno) retorno(null, error);
      });
  },
  get(metodo, data, retorno) {
    var url = host + "/" + metodo;
    if (data) {
      url += "?";
      var lista = Object.keys(data);
      for (var i = 0; i < lista.length; i++) {
        var item = lista[i];
        if (i != 0) {
          url += "&";
        }
        url += "" + item + "=" + encodeURI(data[item]);
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
    if (token_user) {
      config.headers["token-user"] = token_user;
    }
    fetch(url, config)
      .then(response => {
        this.resolverResponse(response, retorno);
      })
      .catch(error => {
        if (retorno) retorno(null, error);
      });
  },
  put(metodo, data, retorno) {
    var url = host + "/" + metodo;
    // console.log(url);
    var config = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    if (token_api) {
      config.headers["x-request-id"] = token_api;
    }
    if (token_user) {
      config.headers["token-user"] = token_user;
    }
    fetch(url, config)
      .then(response => {
        this.resolverResponse(response, retorno);
      })
      .catch(error => {
        if (retorno) retorno(null, error);
      });
  },
  delete(metodo, data, retorno) {
    var url = host + "/" + metodo;
    // console.log(url);
    var config = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    if (token_api) {
      config.headers["x-request-id"] = token_api;
    }
    if (token_user) {
      config.headers["token-user"] = token_user;
    }
    fetch(url, config)
      .then(response => {
        this.resolverResponse(response, retorno);
      })
      .catch(error => {
        if (retorno) retorno(null, error);
      });
  },
  resolverResponse(response, retorno) {
    var p1 = response.json();
    p1.then((responseData, error) => {
      if (response.status != 200) {
        retorno(null, responseData);
      } else if (error) {
        retorno(null, error);
      } else {
        retorno(responseData);
      }
    });
  }
};
