const standerdapi = require("../../api/standerd");

exports.router = [
  {
    method: "get",
    path: "/getStanderd",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      const result = await standerdapi.getStanderd(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/addStanderd",
    callback: async (ctx, next) => {
      const standerd = ctx.request.body.standerd;
      const result = await standerdapi.insertStanderd(standerd);
      ctx.body = result;
    }
  }
];
