const { initDb } = require("../utils/db");

const initDatabase =async () => {
  console.log('api.initDatabase');
  await initDb.init();
};

module.exports = {
  initDatabase
};
