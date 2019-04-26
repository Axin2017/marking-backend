const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";

function connectDb(callback) {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, function(err, db) {
    if (err) {
      console.log("数据库连接失败");
      return;
    }
    console.log("数据库连接成功");
    callback(db);
    db.close();
  });
}

exports.findOne = function(dbname, collectionname, json) {
  connectDb(function(db) {
    const DB = db.db(dbname);
    const collection = DB.collection(collectionname);
    const result = collection.findOne(json, null, callback);
  });
};

exports.find = function(dbname, collectionname, json, callback) {
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

exports.insertOne = function(dbname, collectionname, json, callback) {
  connectDb(function(db) {
    const DB = db.db(dbname);
    const collection = DB.collection(collectionname);
    collection.insertOne(json, callback);
  });
};
