// by 1app
import {
  Cloud
} from "../infra";

export function cancelarPedido(id_empresa, id_user, id_pedido, callback) {
  Cloud.put("usuarios/pedido/cancelar/" + id_pedido, {
    id_empresa: id_empresa,
    id_user: id_user,
    id_pedido: id_pedido
  }, (res, error) => {
    if (callback) callback(res, error);
  });
}

export function pedidosEmpresa(id_empresa, id_user, callback) {
  Cloud.get("usuarios/pedidos", {
    id_empresa: id_empresa,
    id_user: id_user
  }, (res, error) => {
    if (callback) callback(res, error);
  });
}

export function variacoes_opcoes(key_variacao, callback) {
  Cloud.get("variacoes/opcoes", {
    key_variacao: key_variacao
  }, (res, error) => {
    if (callback) callback(res, error);
  });
}

export function adicionarItemCarrinho(pedido, callback) {
  console.log(pedido, 'entro adicionarItemCarrinho')
  Cloud.post("usuarios/carrinhoitem", pedido, (res, error) => {
    console.log('log post adicionarItemCarrinho', res, error)
    if (callback) callback(res, error);
  });
}

export function itensNoCarrinho(callback) {
  Cloud.get("usuarios/carrinho", {}, (res, error) => {
    console.log(res, error)
    if (callback) callback(res, error);
  });
}

export function modificarQuantidade(id_itemCarrinho, quantidade, callback) {
 // console.log('antes log put delete === ID -> ',id_itemCarrinho,'  QTD ->>> ' , quantidade)

  Cloud.put("usuarios/carrinhoitem/" + id_itemCarrinho, {
    qtd: quantidade
  }, (res, error) => {
    console.log('log put delete',id_itemCarrinho, quantidade, res, error)
    if (callback) callback(res, error);
  });
}