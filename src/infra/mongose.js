"use strict";
var Datastore = require("react-native-local-mongodb");
var database = {};

export default class Banco {
  constructor() {}
}

Banco.delete = (tabela, where, callback) => {
  Banco.collection(tabela).remove(where, { multi: true }, function(err, numRemoved) {
    if (callback) callback(numRemoved, err);
  });
};

Banco.save = (tabela, data, callback) => {
  if (!data || !tabela) return callback ? callback(data, { msg: "sem data ou tabela" }) : null;
  Banco.collection(tabela).insert(data, function(err, newDoc) {
    if (newDoc) {
      data._id = newDoc._id;
      if (callback) callback(data, err);
    } else if (err && data._id) {
      Banco.collection(tabela).update({ _id: data._id }, data, function(err, numReplaced) {
        if (callback) callback(data, err);
      });
    } else {
      if (callback) callback(null, err);
    }
  });
};

Banco.update = (tabela, where , data, callback) => {
  if (!data || !where || !tabela) return callback ? callback(data, { msg: "sem _id" }) : null;
    delete data._id;
  Banco.collection(tabela).update(where, data, function(err, numReplaced) {
    //   console.log(err,numReplaced) 
    if (callback) callback(data, err);
  });
};

Banco.select = (tabela, where, callback) => {
  if (!where) {
    where = {};
  }
  Banco.collection(tabela).find(where, function(err, docs) {
    if (callback) callback(docs, err);
  });
};

Banco.first = (tabela, where, callback) => {
  Banco.collection(tabela).find(where, function(err, docs) {
    if (callback) callback(docs ? docs[0] : null, err);
  });
};

Banco.getDB = entidade => {
  return Banco.collection(entidade);
};

Banco.collection = entidade => {
  if (!entidade) entidade = "data";
  if (database && database[entidade]) {
    return database[entidade];
  } else {
    database[entidade] = new Datastore({ filename: entidade, autoload: true });
    return database[entidade];
  }
};
