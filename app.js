const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const body = require("koa-bodyparser");
const app = new Koa();
const Mock = require("mockjs");

app.use(static("dist"));
app.use(body());
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});
const router = new Router();
router.post("/mock", async (ctx) => {
  const data = Mock.mock(ctx.request.body);
  ctx.body = {
    code: 200,
    data,
    message: "",
  };
});
app.use(router.routes());

app.listen(7070, () => {
  console.log("server running at http://127.0.0.1:7070");
});
