const markingapi = require("../../api/marking");

exports.router = [
  {
    method: "get",
    path: "/getMarking",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      const result = await markingapi.getMarking(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/addMarking",
    callback: async (ctx, next) => {
      const marking = ctx.request.body.marking;
      const result = await markingapi.insertMarking(marking);
      ctx.body = result;
    }
  }
];
