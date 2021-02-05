// 依靠body-parser 实现表单数据读取
const Koa = require('koa');
var views = require('koa-views');
let app =  new Koa();

const render = views(__dirname + '/views', {
  map: { html: 'ejs' }
});

app.use(render);
app.use(async (ctx,next)=>{
  let postData = ctx.request.body
  console.log(postData);
  await ctx.render('index5',{postData});
})
app.listen(3000);
console.log("app started at http://127.0.0.1:3000");


