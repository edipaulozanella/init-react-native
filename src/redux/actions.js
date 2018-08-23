import * as types from "./actionTypes";
import { Query, Cloud } from "../infra";
import { AsyncStorage,NetInfo } from "react-native";
import * as Login from '../cloud/login';
export let net =true
let globalStore = null;
export function setStore(store) {
  globalStore = store;
}

export function loginPadrao({email, senha},dispatch,callback) {
  // console.log(dispatch,callback);
  Login.loginEmail(email, senha,(user,erro)=>{
    if(user&&user.objectId){
      dispatch({
        type:"LOGIN",
        user
      })
      callback(user,erro);
      logar(user)
    }else {
      callback(user,erro);
      console.log(user,erro);
    }
  })
}
function logar(user){
  Cloud.setTokenUser(user.token)
  setTimeout( ()=> {
    saveRedux();
  }, 10);
}
export function historicoBusca(texto) {
  if (texto&&texto.length>2) {
    let list = globalStore.getState().listBuscaAnterios;
    let newL=[]
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
export function logout(){
  globalStore.dispatch({
    type:"LOGOUT"
  });
  setTimeout(()=>{
    saveRedux();
  }, 10);
}
export function loadRedux() {
  AsyncStorage.getItem("redux", (err, result) => {
    // console.log(result);
    if (result)
      try {
        var state = JSON.parse(result);
        state.user = state.user? state.user : null;
        if(state.user&&state.user.token)Cloud.setTokenUser(state.user.token);
        globalStore.dispatch({
          type:"INIT",
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
