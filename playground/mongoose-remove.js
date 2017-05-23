const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '592435ebb22b55a7b12d7a46'}).then((todo) => {
//   console.log(todo);
// });
//
Todo.findByIdAndRemove('592435ebb22b55a7b12d7a46').then((todo) => {
  console.log(todo);
});
