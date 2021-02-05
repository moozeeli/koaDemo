const Koa = require('koa');
var views = require('koa-views');
let app =  new Koa();
const render = views(__dirname + '/views', {
  map: { html: 'ejs' }
});
app.use(render) // 这里的中间件会修改 向ctx注入 ctx.render()方法，从而在下一个中间件调用。
app.use(async (ctx,next)=>{
  let people = ['geddy', 'neil', 'alex'];
  await ctx.render('index4',{people: people})
})
app.listen(3000);
console.log("app started at http://127.0.0.1:3000");


