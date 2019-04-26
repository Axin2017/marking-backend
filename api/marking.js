const db = require("../utils/db");

exports.getMarkingList = () => {
  return new Promise((resolve, reject) => {
    db.find("marking", "marking", {}, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.insertMarking = (marking, callback) => {
  db.findOne("marking", "marking", { name: marking.name }, callback);
};
