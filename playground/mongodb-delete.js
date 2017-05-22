// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

  // remove all duplicates
  // db.collection('Users').deleteMany({name: 'Sem'}).then((res) => {
  //   console.log(res);
  // });
  // OR
  // db.collection('Users').deleteMany({name: 'Sem'});

  // remove on _id 123
  // db.collection('Users').findOneAndDelete({_id: 123}).then((res) => {
  //   console.log(JSON.stringify(res, undefined, 2));
  // });

  // db.close();
});
