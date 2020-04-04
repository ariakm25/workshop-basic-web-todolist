const app = require('express').Router();

const db = require('./mysql');

app.get('/', (req, res) => {
  db.query("SELECT * FROM todos WHERE status = 0 ORDER BY deadline ASC", (err, result) => {
    if (err) throw err;

    res.render('index', {
      data: result
    });
  })
});

app.post('/create', (req, res) => {
  const data = {
    judul: req.body.judul,
    deskripsi: req.body.deskripsi,
    deadline: req.body.deadline,
    status: 0,
  };

  db.query('INSERT INTO todos SET ?', data, (err, result) => {
    if (err) throw err;

    res.redirect('/');
  });
});

app.post('/selesai/:id', (req, res) => {

  db.query('UPDATE todos SET status = 1 WHERE id = ?', req.params.id, (err, result) => {
    if (err) throw err;

    res.redirect('/');
  });
});

module.exports = app;
