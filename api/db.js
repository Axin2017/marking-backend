const { initDb } = require("../utils/db");

const initDatabase =async () => {
  console.log('api.initDatabase');
  await initDb.init();
  return {
    status:1
  }
};

module.exports = {
  initDatabase
};
