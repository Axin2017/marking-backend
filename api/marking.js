const {baseop} = require("../utils/db");

const getMarking = async (query)=>{
  return await baseop.find("marking","marking",query)
}

const insertMarking =async (marking) => {
  return await baseop.insertOne("marking","marking",marking)
};

module.exports={
  getMarking,
  insertMarking
}