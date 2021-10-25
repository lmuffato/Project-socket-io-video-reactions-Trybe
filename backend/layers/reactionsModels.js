const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const connection = require('../connection/connection');

// const reactions = {
//   { id: 1, name: 'love', votes: 1 },
//   { id: 2, name: 'surprised', votes: 2 },
//   { id: 3, name: 'cool', votes: 1 },
//   { id: 4, name: 'boring', votes: 1 },
// };

/* RETORNO DO FRONT-END
objReturned = { name: 'love' }
*/

const app = express();
app.use(bodyParser.json());

const TABLE_NAME = 'reactions'; // Tabela do mongodb

// Retorna todos os produtos da coleção
const getAll = async () => {
  const reactions = await connection();
  const reactions = await db.collection(TABLE_NAME).find({}).toArray();
  return reactions;
};

const getByName = async (name) => {
  const nameToBeFound = name;
  const db = await connection();
  const reaction = db.collection(TABLE_NAME).findOne(
    { name: nameToBeFound }
  );
  return reaction;
}

const increaseVotes = async (name) => {
  const nameToBeFound = name;
  const db =  await connection();
  const newCount = await db.collection(TABLE_NAME).findOneAndUpdate(
    { name: nameToBeFound },
    { $inc: { votes: 1 } },
    { returnOriginal: false },
  );
  if (!newCount) return null;
  return newCount;
}

module.exports = { getAll, getByName, increaseVotes };

/*

db.reactions.updateOne(
    { "_id" : ObjectID("61771d449ad43f64ba03e600") },
    { $inc: { votes: 1 } }
  );

db.reactions.updateOne(
    { name : "love" },
    { $inc: { votes: 1 } }
  );

db.reactions.find()

db.reactions.find({ _id: ObjectId("61771d449ad43f64ba03e600")  }, {})

db.reactions.findOneAndUpdate(
  { name: "love" },
  { $inc: { votes: 1 } },
  { returnOriginal: false },
);

*/

// const getById = async (id) => {
//   const db = await connection();
//   const reaction = db.collection(TABLE_NAME).findOne(
//     { _id: ObjectID(id) }
//   );
//   return reaction;
// }

// const increaseVotes = async (name) => {
//   const db =  await connection();
//   db.collection(TABLE_NAME).updateOne(
//     { name },
//     { $inc: { votes: 1 } }
//   );
// }
