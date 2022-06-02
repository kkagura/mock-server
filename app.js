const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const body = require("koa-bodyparser");
const app = new Koa();
const Mock = require("mockjs");

app.use(static("dist"));
app.use(body());
const router = new Router();
router.post("/mock", async (ctx) => {
  const data = Mock.mock(ctx.request.body);
  ctx.body = {
    code: 0,
    data,
    message: "",
  };
});
app.use(router.routes());

app.listen(7070, () => {
  console.log("server running at http://127.0.0.1:7070");
});
