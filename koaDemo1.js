const Koa = require('koa');

let app =  new Koa();

app.use(async (ctx,next)=>{
  console.log('入 全局中间件');
  await next();
  console.log('出 全局中间件')
})

app.listen(3000);
console.log("app started at http://127.0.0.1:3000");


