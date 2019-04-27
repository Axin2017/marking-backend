const baseop = require("./baseop");

const orgList = require("../../dataJson/org.json");
const userList = require("../../dataJson/user.json");
const standerdList = require("../../dataJson/standerd.json");
const roleList = require("../../dataJson/role.json");

const initCollection = async () => {
  await Promise.all([
    baseop.dropCollection("marking", "marking"),
    baseop.dropCollection("marking", "org"),
    baseop.dropCollection("marking", "role"),
    baseop.dropCollection("marking", "user"),
    baseop.dropCollection("marking", "standerd"),
    baseop.createCollection("marking", "marking"),
    baseop.createCollection("marking", "org"),
    baseop.createCollection("marking", "role"),
    baseop.createCollection("marking", "user"),
    baseop.createCollection("marking", "standerd")
  ]);
  console.log("initDb.initCollection");
};

const initDocument = async () => {
  const promiseArray = [];
  orgList.forEach(e => {
    promiseArray.push(
      baseop.insertOne("marking", "org", JSON.parse(JSON.stringify(e)))
    );
  });
  standerdList.forEach(e => {
    promiseArray.push(
      baseop.insertOne("marking", "standerd", JSON.parse(JSON.stringify(e)))
    );
  });
  userList.forEach(e => {
    promiseArray.push(
      baseop.insertOne("marking", "user", JSON.parse(JSON.stringify(e)))
    );
  });
  roleList.forEach(e => {
    promiseArray.push(
      baseop.insertOne("marking", "role", JSON.parse(JSON.stringify(e)))
    );
  });
  await Promise.all(promiseArray);
  console.log("initDb.initDocument");
};

exports.init = async () => {
  console.log("initDb.init");
  await initCollection();
  await initDocument();
};
