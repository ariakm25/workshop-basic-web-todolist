const mysql = require('mysql');

const connetion = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: null,
  database: 'todolist'
});

connetion.connect();

connetion.query('SELECT 1+1 as Dua', (err) => {
  if (err) throw err;
  console.log('Koneksi database berhasil');
});

module.exports = connetion;
