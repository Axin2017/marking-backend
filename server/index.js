const Koa = require('koa');
const app = new Koa();
const router=require('koa-router')();//注意这里是调用之后马上执行
const bodyParser = require('koa-bodyparser');
const markingApi=require('../api/marking')


router.get('/',async (ctx,next)=>{
  ctx.set("Content-Type", "application/json")
  const result= await markingApi.getMarkingList()
  console.log(result)
  ctx.body = JSON.stringify(result)
});

//在router之前加上
app.use(bodyParser());

app.use(router.routes());

app.listen(8081);
console.log('app started at port 8081...');