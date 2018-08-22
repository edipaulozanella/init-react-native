import { Cloud } from "../infra";

export function getProdutos(id, callback) {
  Cloud.get("produtos/" + id, {}, (res, error) => {
    if (callback) callback(res, error);
  });
}
