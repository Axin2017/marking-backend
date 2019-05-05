const {baseop} = require("../utils/db");

const getUser = async (query)=>{
  return await baseop.find("marking","user",query)
}

const insertUser =async (user) => {
  return await baseop.insertOne("marking","user",user)
};

module.exports={
  getUser,
  insertUser
}