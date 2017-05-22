// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59233167b48b17fef9adcf89')
  // }, {
  //   $set: {completed: true}
  // }, {
  //   returnOrginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Mike'
  }, {
    $set: {name: 'Sem'},
    $inc: {age: 1}
  }, {
    returnOrginal: false
  }).then((res) => {
    console.log(res);
  });

  // db.close();
});
