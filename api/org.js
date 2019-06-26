const {baseop} = require("../utils/db");
const dbname = require('../config').dbname
const collectionName = 'org'

const getOrg = async (query)=>{
  return await baseop.find(dbname,collectionName,query)
}

const insertOrg =async (org) => {
  return await baseop.insertOne(dbname,collectionName,org)
};

const deleteOrg = async (query)=>{
  return await baseop.del(dbname,collectionName,query)
}

const updateOrg= async(query,set) => {
  return await baseop.update(dbname,collectionName,query,set)
}


module.exports={
  getOrg,
  insertOrg,
  deleteOrg,
  updateOrg
}