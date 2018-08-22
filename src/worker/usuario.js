import {
  Cloud
} from "../infra";

export function updateUsuario(id_user, data, callback) {
  Cloud.put("usuarios/" + id_user, data, (res, error) => {
    console.log(id_user, data, res, error)
    if (callback) callback(res, error);
  });
}

export function getEnderecosUsuario(callback) {
  Cloud.get("usuarios/enderecos", {}, (res, error) => {
    console.log(res, error)
    if (callback) callback(res, error);
  });
}

export function deletarEndereco(id_endereco, callback) {
  Cloud.delete("enderecos/" + id_endereco, (res, error) => {
    console.log(id_endereco, res, error)
    if (callback) callback(res, error);
  });
}