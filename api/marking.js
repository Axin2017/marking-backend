const {baseop} = require("../utils/db");


exports.getMarkingList = () => {
  return new Promise((resolve, reject) => {
    baseop.find("marking", "marking", {}, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.insertMarking = (marking, callback) => {
  baseop.findOne("marking", "marking", { name: marking.name }, callback);
};
