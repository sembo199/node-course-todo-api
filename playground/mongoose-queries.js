const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59241995f8de9425fc8fe1f6';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id: ', todo);
// }).catch((e) => console.log(e));

// User.findbyid > if no user "user not found" / print user / other errors
User.findById('59235689f00cb3100814f859').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User by ID:', user);
}).catch((e) => console.log(e));
