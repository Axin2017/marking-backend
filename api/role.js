const {baseop} = require("../utils/db");
const dbname = require('../config').dbname
const collectionName = 'role'

const getRole = async (query)=>{
  return await baseop.find(dbname,collectionName,query)
}

const insertRole =async (role) => {
  return await baseop.insertOne(dbname,collectionName,role)
};

const deleteRole = async (query)=>{
  return await baseop.del(dbname,collectionName,query)
}

module.exports={
  getRole,
  insertRole,
  deleteRole
}