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
      const marking = ctx.request.body;
      const result = await markingapi.insertMarking(marking);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/deleteMarking",
    callback: async (ctx, next) => {
      const query = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await markingapi.deleteMarking(query);
      ctx.body = result;
    }
  }
];
