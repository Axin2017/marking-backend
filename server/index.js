const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")(); //注意这里是调用之后马上执行
const bodyParser = require("koa-bodyparser");
const { registRouter } = require("./router");


// 允许跨域
app.use(async (ctx, next) => {
  ctx.set('Cache-Control','no-cache');
  ctx.set('Access-Control-Allow-Origin','*');
  await next();
})
// 拦截请求信息
app.use(async (ctx,next)=>{
  const query=ctx.query
  query && console.log(`query=${JSON.stringify(query)}`)
  await next();
})

// 注册路由
registRouter(router);
// 在router之前加上
app.use(bodyParser());
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
