import * as types from "./actionTypes";
import { Query, Cloud } from "../infra";
import { AsyncStorage, NetInfo } from "react-native";
import * as Login from "../cloud/login";
export let net = true;
let globalStore = null;
export function setStore(store) {
  globalStore = store;
}

export function setPedido(data) {
  return {
    type: "PEDIDO",
    data: {
      qtd: data.qtd
    }
  };
}

export function setHorarios(data) {
  return {
    type: "HORARIOS",
    data: data
  };
}

export function setProdutos(data) {
  return {
    type: "PRODUTOS",
    data: data
  };
}

export function setProdutoEmFoco(data){
  return {
    type: "PRODUTO_FOCO",
    data: data
  };
}

export function setEmpresa(data) {
  return {
    type: "EMPRESA",
    data: data
  };
}

export function loginPadrao({ email, senha }, dispatch, callback) {
  var erro = {};
  // console.log(dispatch,callback);
  // Login.loginEmail(email, senha,(user,erro)=>{
  if (user && user) {
    dispatch({
      type: "LOGIN",
      user
    });
    callback(user, erro);
    logar(user);
  } else {
    callback(user, erro);
    // console.log(user,erro);
  }
  // })
}

export function logar(user) {
  console.log(user)
  Cloud.setTokenUser(user.token_user);
  setTimeout(() => {
    saveRedux();
  }, 10);
  return {
    type: "LOGIN",
    data : user
  };
}

export function historicoBusca(texto) {
  if (texto && texto.length > 2) {
    let list = globalStore.getState().listBuscaAnterios;
    let newL = [];
    newL.push(texto);
    for (let i = 0; i < list.length; i++) {
      if (i < 7 && list[i] != texto) {
        newL.push(list[i]);
      }
    }
    // list.push(dados.pesquisa);
    globalStore.getState().listBuscaAnterios = [...newL];
  }
}
export function logout() {
  globalStore.dispatch({
    type: "LOGOUT"
  });
  setTimeout(() => {
    saveRedux();
  }, 10);
}
export function loadRedux(dispatch) {
  
  AsyncStorage.getItem("redux", (err, result) => {
     //console.log(err,result);
    if (result)
      try {
        var state = JSON.parse(result);
        state.user = state.user ? state.user : null;
        //console.log(state)
        if (state.user && state.user.token_user)
          Cloud.setTokenUser(state.user.token_user);
        dispatch({
          type: "INIT",
          ...state
        });
      } catch (e) {}
  });
}

export function saveRedux() {
  try {
    AsyncStorage.setItem("redux", JSON.stringify(globalStore.getState()));
  } catch (e) {}
}

export function init() {}
