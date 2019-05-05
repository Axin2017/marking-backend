const {baseop} = require("../utils/db");

const getStanderd = async (query)=>{
  return await baseop.find("marking","standerd",query)
}

const insertStanderd =async (standerd) => {
  return await baseop.insertOne("marking","standerd",standerd)
};

module.exports={
  getStanderd,
  insertStanderd
}