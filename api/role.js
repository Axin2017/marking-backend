const {baseop} = require("../utils/db");

const getRole = async (query)=>{
  return await baseop.find("marking","role",query)
}

const insertRole =async (role) => {
  return await baseop.insertOne("marking","role",role)
};

module.exports={
  getRole,
  insertRole
}