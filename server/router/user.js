const userapi = require("../../api/user");
const {decode,encode} = require('../../utils/base64')
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
    method: "post",
    path: "/user/login",
    callback: async (ctx, next) => {
      const query = ctx.request.body;
      let result = await userapi.getUser(query);
      if(result && result.length){
        result=result[0]
        result.token=encode(result.username+'-'+result.password)
        ctx.body = result;
      }else{
        ctx.body = ''
      }
    }
  },
  {
    method: "post",
    path: "/user/deleteUser",
    callback: async (ctx, next) => {
      const query = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await userapi.deleteUser(query);
      ctx.body = result;
    }
  },
  {
    method: "post",
    path: "/user/updateUser",
    callback: async (ctx, next) => {
      const {query,set} = ctx.request.body;
      if(!query._id){
        query._id=''
      }
      const result = await userapi.updateUser(query,set);
      ctx.body = result;
    }
  },
  {
    method: "get",
    path: "/user/info",
    callback: async (ctx, next) => {
      const query = ctx.query || {};
      let username = ''
      let password = ''
      if(query.token){
        let decodeToken = decode(query.token)
        let accounts = decodeToken.split('-')
        username = accounts[0]
        password = accounts[1]
      }
      let result = await userapi.getUser({username,password});
      if(result && result.length){
        result=result[0]
        result.token=encode(result.username+'-'+result.password)
        ctx.body = result;
      }else{
        ctx.body = ''
      }
    }
  }
];
