const {baseop} = require("../utils/db");
const dbname = require('../config').dbname
const collectionName = 'standerd'
const ObjectId = require('mongodb').ObjectId

const getStanderd = async (query)=>{
  return await baseop.find(dbname,collectionName,query)
}

const insertStanderd =async (standerd) => {
  return await baseop.insertOne(dbname,collectionName,standerd)
};

const deleteStanderd =async (query) => {
  return await baseop.del(dbname,collectionName,query)
};

const updateStanderd= async(query,set) => {
  const rs = await baseop.update(dbname,collectionName,query,set)
  if (rs.result.nModified > 0) {
    await afterStanderdUpdated(query, set)
  }
  return rs
}

// 因为不是关系型数据库，修改标准之后，都需要手动维护
const afterStanderdUpdated = async (query, set) => {
  // 维护org集合
  return await baseop.update(
    dbname,
    'org',
    { 'standerd._id': ObjectId(query._id) },
    { 'standerd': set },
    { multi: true }
  )
}

module.exports={
  getStanderd,
  insertStanderd,
  deleteStanderd,
  updateStanderd
}