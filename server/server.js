var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// To be able to send JSON to our application
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validate id using isvalid
  if (!ObjectID.isValid(id)) {
    // respond with 404 - send back empty body
    res.status(404).send();
  }

  // findbyid
  Todo.findById(id).then((todo) => {
    // Success
    if (todo) {
      // If todo - send it back
      res.status(200).send(todo);
    } else if (!todo) {
      // If no todo - Send back 404 with empty body
      res.status(404).send();
    }
  }, (e) => {
    // Error
    // Send back 400 - send back empty body
    res.status(400).send();
  });

});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
