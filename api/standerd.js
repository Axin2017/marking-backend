const {baseop} = require("../utils/db");

const getStanderd = async (query)=>{
  return await baseop.find("marking","standerd",query)
}

const insertStanderd =async (standerd) => {
  return await baseop.insertOne("marking","standerd",standerd)
};

const deleteStanderd =async (query) => {
  return await baseop.del("marking","standerd",query)
};

const updateStanderd= async(query,set) => {
  return await baseop.update("marking","standerd",query,set)
}

module.exports={
  getStanderd,
  insertStanderd,
  deleteStanderd,
  updateStanderd
}