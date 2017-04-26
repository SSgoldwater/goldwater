var multer = require('multer');
var pg = require('pg');
var config = require('./config.js');

var upload = multer();
var client = new pg.Client({ database: config.database });
client.connect(function(err) {
  if (err) throw err;
});

module.exports = function(backend) {
  backend.get('/api/todos', function(req, res) {
    client.query("SELECT * FROM todos", function(err, result) {
      if (err) {
        throw err;
      } else {
        res.json({ todos: result.rows });
      }
    });
  });

  backend.post('/api/todos/add', upload.array(), function(req, res) {
    client.query({
      text: "INSERT INTO todos (text) VALUES ($1) RETURNING id",
      values: [
        req.body.text,
      ]
    }, function(err, result) {
      if (err) {
        throw err;
      } else {
        res.json({ id: result.rows[0].id });
      }
    });
  });

  backend.put('/api/todos/:id', upload.array(), function(req, res) {
    client.query({
      text: "UPDATE todos SET text = $1 WHERE id = $2",
      values: [
        req.body.text,
        req.body.id
      ]
    }, function(err, results) {
      if (err) { throw err }
      else {
        res.json({ result: results });
      }
    });
  });

  backend.delete('/api/todos/:id', function(req, res) {
    client.query({ 
      text: "DELETE FROM todos WHERE id = $1",
      values: [ req.params.id ]
    }, function(err, result) {
      if (err) {
        throw err;
      } else {
        res.json({ rows: result.rows });
      }
    });
  });
}
