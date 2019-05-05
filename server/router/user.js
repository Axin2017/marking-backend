const userapi = require("../../api/user");

exports.router = [
  {
    method: "get",
    path: "/getUser",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      const result = await userapi.getUser(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/addUser",
    callback: async (ctx, next) => {
      const user = ctx.request.body.user;
      const result = await userapi.insertUser(marking);
      ctx.body = result;
    }
  }
];
