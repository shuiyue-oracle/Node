const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/list', (ctx, next) => {
  ctx.body={
    code: 1,
    msg: null,
    data: [
      {code: 1001, name: '张三'}
    ]
  }
})
router.post('/update', (ctx, next) => {
  ctx.body = {
    code: 1,
    msg: null
  }
});

app.use(router.routes()).use(router.allowedMethods())

app.listen(3030, ()=>{
  console.log('http://localhost:3030');
})