const mysql = require('mysql')
const { createPool } = require('mysql');

// Database Connection for Production

// const pool = mysql.createPool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_DATABASE,
//   socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
// });

const pool = mysql.createPool({
  user: "root",
  password: "gpEp63bvAOd5oA4y",
  database: "utp_dex",
  socketPath: "/cloudsql/utopia-315014:us-west1:utp-dex-db",
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