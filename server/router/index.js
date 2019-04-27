const db=require('./db')

const routerArray=[db]

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
