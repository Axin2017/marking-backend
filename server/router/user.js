const userapi = require("../../api/user");

exports.router = [
  {
    method: "get",
    path: "/getUserList",
    callback: async (ctx, next) => {
      const result = await userapi.getUserList();
      ctx.set("Content-Type", "application/json");
      ctx.body = JSON.stringify(result);
    }
  },
  {
    method: "get",
    path: "/getUser/:userName",
    callback: async (ctx, next) => {
      const result = await markingapi.getMarking(marking);
      ctx.set("Content-Type", "application/json");
      ctx.body = JSON.stringify(result);
    }
  },
  {
    method: "post",
    path: "/addMarking",
    callback: async (ctx, next) => {
      const marking = ctx.request.body.marking;
      const result = await markingapi.insertMarking(marking);
      console.log(marking);
      ctx.set("Content-Type", "application/json");
      ctx.body = JSON.stringify(result);
    }
  }
];
