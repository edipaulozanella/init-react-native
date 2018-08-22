import {
    Cloud
} from "../infra";

export function formasPagamento( callback) {
    Cloud.get("formapagamentos/empresa", {}, (res, error) => {
        console.log(res, error)
        if (callback) callback(res, error);
    });
}

export function horarioFuncionamento(callback) {
    Cloud.get("horarios/empresa", {}, (res, error) => {        
        if (callback) callback(res, error);
    });
}

export function fidelidade(id_empresa, callback) {
    Cloud.get("empresa/checarfidelidade", {
        id_empresa: id_empresa
    }, (res, error) => {
        if (callback) callback(res, error);
    });
}

export function loadEmpresa(callback) {
    Cloud.get("loadsite", {}, (res, error) => {
        if (callback) callback(res, error);
    });
}

export function getProdutosCategoria(callback) {
    Cloud.get("produtos/home", {}, (res, error) => {
        if (callback) callback(res, error);
    });
}