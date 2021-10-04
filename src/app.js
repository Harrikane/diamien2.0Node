const Koa = require('koa');
const app = module.exports = new Koa();
// const auth = require('koa-basic-auth');

app.use(async function(ctx) {
  ctx.body = "merde quoi ";
});

if (!module.parent) app.listen(3000);

