const {baseop} = require("../utils/db");

const getOrg = async (query)=>{
  return await baseop.find("marking","org",query)
}

const insertOrg =async (org) => {
  return await baseop.insertOne("marking","org",org)
};

const deleteOrg = async (query)=>{
  return await baseop.del("marking","org",query)
}

module.exports={
  getOrg,
  insertOrg,
  deleteOrg
}