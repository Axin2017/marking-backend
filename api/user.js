const {baseop} = require("../utils/db");

const getUser = async (query)=>{
  return await baseop.find("marking","user",query)
}

const insertUser =async (user) => {
  return await baseop.insertOne("marking","user",user)
};

const deleteUser = async (query)=>{
  return await baseop.del("marking","user",query)
}

const updateUser= async(query,set) => {
  return await baseop.update("marking","user",query,set)
}

module.exports={
  getUser,
  insertUser,
  deleteUser,
  updateUser
}