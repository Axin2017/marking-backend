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

const updateOrg= async(query,set) => {
  return await baseop.update("marking","org",query,set)
}


module.exports={
  getOrg,
  insertOrg,
  deleteOrg,
  updateOrg
}