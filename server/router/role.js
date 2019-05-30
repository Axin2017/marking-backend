const roleapi = require("../../api/role");

exports.router = [
  {
    method: "get",
    path: "/getRole",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      const result = await roleapi.getRole(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/addRole",
    callback: async (ctx, next) => {
      const role = ctx.request.body;
      const result = await roleapi.insertRole(role);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/deleteRole",
    callback: async (ctx, next) => {
      const query = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await roleapi.deleteRole(query);
      ctx.body = result;
    }
  }
];
