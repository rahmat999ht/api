'user strict';

const mysql = require('mysql');

//local mysql db connection phpMyAdmin5/index.php?route=/database/structure&server=1&db=db_mahasiswa
const dbConn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: '8888',
  password: '',
  database: 'db_mahasiswa'
});
dbConn.connect(function (err) {
  if (err) console.log(err);
  console.log("Database Connected!");
});
module.exports = dbConn;