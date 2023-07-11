const mysql2 = require("mysql2/promise");
const createPool = mysql2.createPool;

const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

module.exports = pool;
