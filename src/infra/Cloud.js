var host = "http://192.168.0.105:3002/v2";
  // var host = "http://localhost:3002/v2";
// var host = "http://165.227.218.55:3002/v2";
var token_api = "a9434866b8b19d7b416b4ea0752f005d";
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
        if (data[item] + "" == "undefined"||data[item] + "" == "null"||data[item] + "" == ""||data[item] + "" == "false") continue;
        if (i != 0) {
          url += "&";
        }
        // url += "" + item + "=" + encodeURI(data[item]);
        url += "" + item + "=" + (this.isObject(data[item])||this.isArray(data[item])?JSON.stringify(data[item]):encodeURI(data[item]));
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
  },
   isObject(val) {
    return typeof val === "object";
  },

   isArray(object) {
    if (object && JSON.stringify(object) == "[]") {
      return true;
    }
    if (object && object.constructor && object.constructor === Array) {
      return true;
    } else {
      return false;
    }
  }
};
