const {baseop} = require("../utils/db");

const getRole = async (query)=>{
  return await baseop.find("marking","role",query)
}

const insertRole =async (role) => {
  return await baseop.insertOne("marking","role",role)
};

const deleteRole = async (query)=>{
  return await baseop.del("marking","role",query)
}

module.exports={
  getRole,
  insertRole,
  deleteRole
}