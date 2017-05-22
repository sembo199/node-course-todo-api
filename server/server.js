var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo2 = new Todo({
//   text: 'Something to do'
// });
//
// newTodo2.save().then((doc) => {
//   console.log('Saved todo');
//   console.log(doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var newUser = new User({
  email: "  sem@ekkelboom.nl"
});

newUser.save().then((doc) => {
  console.log('Saved User:');
  console.log(doc);
}, (e) => {
  console.log('Error', e);
});
