const mysql = require('mysql')
const { createPool } = require('mysql');

// Database Connection for Production

const pool = mysql.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
});

module.exports = pool;

// Database Connection for Development

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASS
// });

// module.exports = pool;