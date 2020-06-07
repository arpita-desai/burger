const connection = require("./connection.js");

let queryString;

const orm = {
  selectAll(tableName, cb) {
    queryString = "select * from ??";
    connection.query(queryString, [tableName],(err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne(tableName, col, val, cb) {
    queryString = `insert into ${tableName} (${col}) values (${val});`;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne(tableName, id, cb) {
    queryString = "update ?? set devoured=1 where id=?";
    console.log(queryString);
    connection.query(queryString, [tableName, id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
