const mysql2 = require("mysql2/promise");
const createPool = mysql2.createPool;

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  port: 3306,
  database: "virtualizaciondb",
});

module.exports = pool;
