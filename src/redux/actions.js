import * as types from "./actionTypes";
import { Query, Model, Cloud } from "../infra";
import { AsyncStorage } from "react-native";

let globalStore = null;
export function setStore(store) {
  globalStore = store;
}

export function loadRedux() {
  AsyncStorage.getItem("redux", (err, result) => {
    if (result)
      try {
        var state = JSON.parse(result);
        state.user = state.user? new Model("user").parse(state.user) : null;
        globalStore.dispatch(state);
      } catch (e) {}
  });
}
export function saveRedux() {
  try {
    AsyncStorage.setItem("redux", JSON.stringify(globalStore.getState()));
  } catch (e) {}
}

export function init() {}
