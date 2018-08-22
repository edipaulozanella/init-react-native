import { Query, Cloud } from "../infra";
import { AsyncStorage, NetInfo } from "react-native";
export let net = true;
let globalStore = null;
export function setStore(store) {
  globalStore = store;
}

export function adicionarOpcaoTemp(opcao, produtos, limite) {
  if (isCheckedOpcao(opcao._id, produtos.opcoes)) {
    let novaLista = [];
    for (let index = 0; index < produtos.opcoes.length; index++) {
      const element = produtos.opcoes[index];
      if (element.id_opcao != opcao._id) novaLista.push(element);
    }

    if (contadorItem(produtos.opcoes, opcao.pai) >= limite) {
      return {
        type: "TENP_ADICIONAR_OPCIONAIS",
        data: {
          ...produtos,
          opcoes: novaLista
        }
      };
    }

    return {
      type: "TENP_ADICIONAR_OPCIONAIS",
      data: {
        ...produtos,
        opcoes: novaLista
      }
    };
    //produtos.opcoes.splice(produtos.opcoes.findIndex(e => e.id_opcao == opcao.id_opcao), 1)
  } else {
    if (contadorItem(produtos.opcoes, opcao.pai) >= limite) {
      return {
        type: "TENP_ADICIONAR_OPCIONAIS",
        data: produtos
      };
    }

    produtos.opcoes.push({
      id_opcao: opcao._id,
      qtd: opcao.qtd,
      nome: opcao.nome,
      pai: opcao.pai
    });
  }
  return {
    type: "TENP_ADICIONAR_OPCIONAIS",
    data: produtos
  };
}
export function tempItem(novoItem) {
  // console.log(novoItem);
  return {
    type: "INIT_PEDIDO",

    key_produto: novoItem._id,
    qtd: 1,
    nome: novoItem.nome,
    obs: null,
    opcoes: []
  };
}

export function adicionarOpcao(opcao, listaProdutos, key_produto) {
  // console.log(opcao)
  listaProdutos[
    listaProdutos.findIndex(e => e.key_produto === key_produto)
  ].opcoes.push({
    id_opcao: opcao._id,
    qtd: opcao.qtd,
    nome: opcao.nome
  });
  return {
    type: "ADICIONAR_OPCIONAIS",
    data: listaProdutos
  };
}

export function isCheckedOpcao(id_opcao, lista_opcoes) {
  return lista_opcoes.find(x => x.id_opcao === id_opcao);
}

export function novoItem(listaProdutos = [], novoItem) {
  listaProdutos.push({
    key_produto: null,
    qtd: null,
    obs: null,
    opcoes: [],
    ...novoItem
  });
  return {
    type: "ADICIONAR_ITEM",
    data: listaProdutos
  };
}

export function contadorItem(list, pai) {
  // let cont = 0
  // for (var i = 0; i < list.length; i++) {
  //   if (list.find(x => x.id_opcao == list[i].id_opcao && x.pai == pai)) cont++;
  // }
  // list.filter(x => x.pai == pai);
  return list.filter(x => x.pai == pai).length;
  // return cont
}
