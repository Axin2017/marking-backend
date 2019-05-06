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

const findOne = async (dbname, collectionname, query) => {
  const db = await connectDb();
  const DB = db.db(dbname);
  const collection=DB.collection(collectionname);
  const result =await collection.findOne(query);
  db.close();
  return result;
};

const find = async (dbname, collectionname, query) => {
  const db = await connectDb();
  const DB = db.db(dbname);
  const collection=DB.collection(collectionname);
  const result =await collection.find(query).toArray();
  db.close();
  return result;
};

const dropCollection = async (dbname,collectionname) => {
  const db = await connectDb();
  const DB = db.db(dbname);
  const isDrop =await DB.dropCollection(collectionname);
  db.close();
  return isDrop;
}

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
  db.close()
  return rs;
};

module.exports = {
  connectDb,
  findOne,
  find,
  insertOne,
  createCollection,
  dropCollection
};
