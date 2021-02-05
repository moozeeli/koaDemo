const Koa = require('koa');
let app = new Koa();
app.use(async (ctx,next)=>{
  await next();
  console.log(ctx.status)

  // 在应用级中间件中定义的错误级中间件
  if(ctx.status===404){
    ctx.body = '404'
  }else{
    ctx.body = 'hello world'
  }
})
app.listen('3000');