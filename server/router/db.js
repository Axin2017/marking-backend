const dbapi=require('../../api/db')

exports.router=[
  {
    method:'get',
    path:'/initDb',
    callback:async (ctx,next)=>{
      const result=await dbapi.initDatabase()
      ctx.body = JSON.stringify(result)
    }
  }
]