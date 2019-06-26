const { baseop } = require('../utils/db')
const dbname = require('../config').dbname
const collectionName = 'user'
const ObjectId = require('mongodb').ObjectId

const getUser = async query => {
  return await baseop.find(dbname, collectionName, query)
}

const insertUser = async user => {
  return await baseop.insertOne(dbname, collectionName, user)
}

const deleteUser = async query => {
  return await baseop.del(dbname, collectionName, query)
}

const updateUser = async (query, set) => {
  const rs = await baseop.update(dbname, collectionName, query, set)
  if (rs.result.nModified > 0) {
    await afterUserUpdated(query, set)
  }
  return rs
}

// 因为不是关系型数据库，修改用户之后，都需要手动维护
const afterUserUpdated = async (query, set) => {
  // 维护org集合
  return await baseop.update(
    dbname,
    'org',
    { 'users._id': ObjectId(query._id) },
    { 'users.$': set },
    { multi: true }
  )
}

module.exports = {
  getUser,
  insertUser,
  deleteUser,
  updateUser
}
