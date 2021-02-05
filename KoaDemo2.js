const Koa = require('koa');
const Router = require('koa-router');
let app =  new Koa();
let router = new Router();

router.get('/',async (ctx,next)=>{
  console.log('路由级中间件');
  ctx.body='路由级'
	await next();
})

let fn = async (ctx,next)=>{
  console.log('入 全局中间件');
  await next();
  console.log('出 全局中间件')
}

app.use(router.routes())
app.use(fn)

app.listen(3000);
console.log("app started at http://127.0.0.1:3000");


