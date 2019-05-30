const Koa = require("koa");
const app = new Koa();
var cors = require('koa2-cors');
const router = require("koa-router")(); //注意这里是调用之后马上执行
const bodyParser = require("koa-bodyparser");
const { registRouter } = require("./router");


// 允许跨域
app.use(cors())

// 注册路由
registRouter(router);
// 在router之前加上
app.use(bodyParser());


// 拦截请求和返回，调试
app.use(async (ctx,next)=>{
  const start=new Date()
  const path=ctx.path
  const getQuery=ctx.query
  const postBody=ctx.request.body
  console.log(`${start.toLocaleString()}\npath=${JSON.stringify(path)}`)
  getQuery && console.log(`getQuery=${JSON.stringify(getQuery)}`)
  postBody && console.log(`${start.toLocaleString()}\n postBody=${JSON.stringify(postBody)}`)
  await next();
  const end=new Date()
  const result=ctx.body
  ctx.body={data:ctx.body,status:1,message:''}
  result && console.log(`${end.toLocaleString()}\n result=${JSON.stringify(result)}`)
})

// 路由
app.use(router.routes());
// 统一错误处理
app.on("error", (err, ctx) => {
  console.error("server error:\n"+err)
  ctx.response.status = err.statusCode || err.status || 500;
  ctx.response.body = {
    message: err.message
  };
});


app.listen(8081);
console.log("app started at port 8081...");
