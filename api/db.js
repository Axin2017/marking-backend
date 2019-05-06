const { initDb } = require("../utils/db");

const initDatabase =async () => {
  await initDb.init();
  return {
    status:1
  }
};

module.exports = {
  initDatabase
};
