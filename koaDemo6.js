// 依靠 koa-static 实现静态服务
const Koa = require('koa');
var views = require('koa-views');
const static = require('koa-static');
let app =  new Koa();

app.use(static('./static'));
const render = views(__dirname + '/views', {
  map: { html: 'ejs' }
});
app.use(render);
app.use(async (ctx,next)=>{
  await ctx.render('index6');
})
app.listen(3000);
console.log("app started at http://127.0.0.1:3000");


