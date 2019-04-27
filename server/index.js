const Koa = require('koa');
const app = new Koa();
const router=require('koa-router')();//注意这里是调用之后马上执行
const bodyParser = require('koa-bodyparser');
const {registRouter} =require('./router')

// 注册路由
registRouter(router)

//在router之前加上
app.use(bodyParser());

app.use(router.routes());

app.listen(8081);
console.log('app started at port 8081...');