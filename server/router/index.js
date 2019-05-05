const db=require('./db')
const org=require('./org')
const marking=require('./marking')
const role=require('./role')
const standerd=require('./standerd')
const user=require('./user')

const routerArray=[db,org,marking,role,standerd,user]

const registRouter=(router) =>{
  routerArray.forEach(model => {
    model.router.forEach(r=>{
      router[r.method](r.path,r.callback)
    })
  })
}

module.exports={
  registRouter
}
