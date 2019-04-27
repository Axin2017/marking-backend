/*
 *@description: mongodb基础操作类
 *@author: 谭新
 *@date: 2019-04-27 10:39:24
 *@note: mongodb基础操作类
 */

const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";

const connectDb = async () => {
  const rs = await MongoClient.connect(dbUrl, { useNewUrlParser: true });
  return rs;
};

const findOne = (dbname, collectionname, json) => {
  connectDb(function(db) {
    const DB = db.db(dbname);
    const collection = DB.collection(collectionname);
    const result = collection.findOne(json, null);
  });
};

const find = (dbname, collectionname, json, callback) => {
  connectDb(function(db) {
    const DB = db.db(dbname);
    const collection = DB.collection(collectionname);
    collection.find(json).toArray(function(err, docs) {
      if (err) {
        callback(err);
      }
      callback(null, docs);
    });
  });
};

const createCollection =async (dbname, collectionname, option) => {
  const db = await connectDb();
  const DB = db.db(dbname);
  const collection =await DB.createCollection(collectionname, option);
  db.close()
  return collection;
};

const insertOne = async (dbname, collectionname, json) => {
  const db = await connectDb();
  const DB = db.db(dbname);
  const collection = DB.collection(collectionname);
  const rs = await collection.insertOne(json);
  console.log('baseOp.insertOne');
  db.close()
  console.log('db.close');
  return rs;
};

module.exports = {
  connectDb,
  findOne,
  find,
  insertOne,
  createCollection
};
