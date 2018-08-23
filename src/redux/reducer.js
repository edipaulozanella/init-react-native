import * as types from "./actionTypes";

export default function app(state = {}, action = {}) {
  switch (action.type) {
    case types.LOGOUT:
    return Object.assign({}, state, {user:null});

    case types.INIT:
    return Object.assign(stateINIT, state, {...action});

    case types.LOGIN:
    return Object.assign(stateINIT, state, {user:action.user});

    case types.LISTABUSCA:
    return Object.assign(stateINIT, state, {listaTexto:action.listaTexto});

    default:
    console.log("not type ......................."+action.type);
    delete action.type
    return Object.assign({}, state, action);
  }
}
let stateINIT= {
  user:null,
  listBuscaAnterios:[]
}
