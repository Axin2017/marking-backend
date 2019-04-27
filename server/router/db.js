const dbapi=require('../../api/db')

exports.router=[
  {
    method:'get',
    path:'/initDb',
    callback:async (ctx,next)=>{
      const result=await dbapi.initDatabase()
      console.log('router.initDb')
      ctx.set("Content-Type", "application/json")
      ctx.body = JSON.stringify(result)
    }
  }
]