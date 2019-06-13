const orgapi = require("../../api/org");

exports.router = [
  {
    method: "get",
    path: "/getOrg",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      const result = await orgapi.getOrg(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/addOrg",
    callback: async (ctx, next) => {
      const org = ctx.request.body;
      const result = await orgapi.insertOrg(org);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/deleteOrg",
    callback: async (ctx, next) => {
      const query = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await orgapi.deleteOrg(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/updateOrg",
    callback: async (ctx, next) => {
      const {query,set} = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await orgapi.updateOrg(query,set);
      ctx.body = result;
    }
  }
];
