const {baseop} = require("../utils/db");

const getMarking = async (query)=>{
  return await baseop.find("marking","marking",query)
}

const getMarkingList =async () => {
  return await baseop.find("marking","marking",{})
};

const insertMarking =async (marking) => {
  return await baseop.insertOne("marking","marking",marking)
};

module.exports={
  getMarking,
  getMarkingList,
  insertMarking
}