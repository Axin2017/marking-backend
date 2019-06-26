const {baseop} = require("../utils/db");
const dbname = require('../config').dbname
const collectionName = 'marking'

const getMarking = async (query)=>{
  return await baseop.find(dbname,collectionName,query)
}

const insertMarking =async (marking) => {
  return await baseop.insertOne(dbname,collectionName,marking)
};

const deleteMarking = async (query)=>{
  return await baseop.del(dbname,collectionName,query)
}

const updateMarking= async(query,set) => {
  return await baseop.update(dbname,collectionName,query,set)
}

module.exports={
  getMarking,
  insertMarking,
  deleteMarking,
  updateMarking
}