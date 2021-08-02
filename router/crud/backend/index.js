const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const faker = require('faker');
const genID = require('./genID');

const app = new Koa();

app
  .use(
    cors({
      origin: '*',
      allowMethods: ['GET', 'POST', 'DELETE'],
      allowHeaders: ['Content-Type'],
    })
  )
  .use(koaBody({ json: true, urlencoded: true, multipart: true }));

let posts = [
  { id: `${genID()}`, content: faker.lorem.sentence(), created: Date.now() },
  { id: `${genID()}`, content: faker.lorem.sentence(), created: Date.now() },
  { id: `${genID()}`, content: faker.lorem.sentence(), created: Date.now() },
];

const router = new Router();

router.get('/posts', async (ctx, next) => {
  ctx.response.body = posts;
});

router.post('/posts', async (ctx, next) => {
  const { id, content } = ctx.request.body;
  if (id) {
    posts = posts.map((o) => (o.id !== id ? o : { ...o, content: content }));
    ctx.response.status = 204;
    return;
  }

  posts.push({ ...ctx.request.body, id: `${genID()}`, created: Date.now() });
  ctx.response.status = 204;
});

router.delete('/posts/:id', async (ctx, next) => {
  const postId = ctx.params.id;
  const index = posts.findIndex((o) => o.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
  }
  ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started on port #', port));
