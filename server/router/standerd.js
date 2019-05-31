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
      const standerd = ctx.request.body;
      const result = await standerdapi.insertStanderd(standerd);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/deleteStanderd",
    callback: async (ctx, next) => {
      const query = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await standerdapi.deleteStanderd(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/updateStanderd",
    callback: async (ctx, next) => {
      const {query,set} = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await standerdapi.updateStanderd(query,set);
      ctx.body = result;
    }
  }
];
