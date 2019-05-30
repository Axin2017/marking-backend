const userapi = require("../../api/user");

exports.router = [
  {
    method: "get",
    path: "/user/getUser",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      const result = await userapi.getUser(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/user/addUser",
    callback: async (ctx, next) => {
      const user = ctx.request.body;
      const result = await userapi.insertUser(user);
      ctx.body = result;
    }
  },
  {
    method: "get",
    path: "/user/login",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      let result = await userapi.getUser(query);
      if(result && result.length){
        result=result[0]
        result.token=result.username+result.password
      }
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/deleteUser",
    callback: async (ctx, next) => {
      const query = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await userapi.deleteUser(query);
      ctx.body = result;
    }
  }
];
