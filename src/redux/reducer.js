import * as types from "./actionTypes";

export default function app(state = {}, action = {}) {
  console.log(action.type);
  switch (action.type) {

    case "PEDIDO":
      // stateAddPedidoCarrinho.pedido = action.data ? {
      //   ...action.data
      // } : {};
      // return stateAddPedidoCarrinho;
      console.log(Object.assign(stateAddPedidoCarrinho, state, {
        opcoes: [...action.data]
      }), state.opcoes)
      return Object.assign(stateAddPedidoCarrinho, state, {
        Carrinho: { ...Carrinho,
          item: [...action.data]
        }
      });
    case types.INIT_PEDIDO:
      return Object.assign(stateINIT, state, {
        tempPedido: {
          opcoes: [],
          key_produto: action.key_produto,
          qtd: action.qtd,
          obs: action.obs,
          nome: action.nome
        }
      });
    case types.TENP_ADICIONAR_OPCIONAIS:
      return Object.assign(stateINIT, state, {
        tempPedido: { ...action.data
        }
      });

    case 'HORARIOS':
      state.empresa = action.data ? {
        ...action.data
      } : {};
      return state;

    case "EMPRESA":
      state.empresa = action.data ? {
        ...action.data
      } : {};
      return state;

    case "PRODUTO_FOCO":
      state.produtoFoco = action.data ? {
        ...action.data
      } : {};
      return state;

    case "PRODUTOS":
      state.produtos = action.data ? [...action.data] : [];
      return state;

    case types.LOGOUT:
      return Object.assign({}, state, {
        user: null
      });

    case types.INIT:
      return Object.assign(stateINIT, state, {
        ...action
      });

    case types.LOGIN:
      // state.pedido = {};
      // state.user = action.data ? {
      //   ...action.data
      // } : {};
      // return state;
      return Object.assign(stateINIT, state, {
        pedido: {},
        user: action.data
      });

    case types.LISTABUSCA:
      return Object.assign(stateINIT, state, {
        listaTexto: action.listaTexto
      });

    case types.SETCARRINHO:
      return Object.assign(stateINIT, state, {
        carrinho: action.newCarrinho
      });

      case types.SET_HORARIO_ATENDIMENTO:
      return Object.assign(stateINIT, state, {
        horariosAtendimento: action.horariosAtendimento
      });

    case types.SET_ENDERECOS_USER:
      return Object.assign(stateINIT, state, {
        user_enderecos: action.user_enderecos
      });

    default:
      console.log("not type ......................." + action.type);
      delete action.type;
      return Object.assign({}, state, action);
  }
}
let stateINIT = {
  user: null,
  listBuscaAnterios: [],
  carrinho: {
    itens: [
      //{
      // key_produto: null,
      // qtd: null,
      // obs: null,
      // opcoes: [
      //   {
      //   id_opcao: null,
      //   qtd: null,
      //   nome: null
      // }
      // ]
      //  }
    ],
    valor: 0
  }
};


let stateAddPedidoCarrinho = {
  carrinho: {
    itens: [
      //{
      // key_produto: null,
      // qtd: null,
      // obs: null,
      // opcoes: [
      //   {
      //   id_opcao: null,
      //   qtd: null,
      //   nome: null
      // }
      // ]
      //  }
    ],
    valor: 0
  }
};