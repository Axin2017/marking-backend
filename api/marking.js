const {baseop} = require("../utils/db");

const getMarking = async (query)=>{
  return await baseop.find("marking","marking",query)
}

const insertMarking =async (marking) => {
  return await baseop.insertOne("marking","marking",marking)
};

const deleteMarking = async (query)=>{
  return await baseop.del("marking","marking",query)
}

const updateMarking= async(query,set) => {
  return await baseop.update("marking","marking",query,set)
}

module.exports={
  getMarking,
  insertMarking,
  deleteMarking,
  updateMarking
}