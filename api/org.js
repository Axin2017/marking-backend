const {baseop} = require("../utils/db");

const getOrg = async (query)=>{
  return await baseop.find("marking","org",query)
}

const insertOrg =async (org) => {
  return await baseop.insertOne("marking","org",org)
};

module.exports={
  getOrg,
  insertOrg
}