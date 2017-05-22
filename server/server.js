var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook dinner'
});

var newTodo2 = new Todo({
  text: 'Cook dinner',
  completed: true,
  completedAt: 123
});

newTodo.save().then((doc) => {
  console.log('Saved todo');
  console.log(doc);
}, (e) => {
  console.log('Unable to save todo', e);
});

newTodo2.save().then((doc) => {
  console.log('Saved todo');
  console.log(doc);
}, (e) => {
  console.log('Unable to save todo', e);
});
