const mysql = require('mysql2/promise');

const getConnection = async () =>
  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_store',
  });

module.exports = {
  getConnection,
};
