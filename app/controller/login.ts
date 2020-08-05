import { Controller } from "egg";

export default class LoginController extends Controller {
  public async login() {
    const { ctx, app } = this;
    const res_error = { status: 0, message: "用户名或密码错误" };
    const res_success = { status: 1, message: "登录成功！" };
    const data = ctx.request.body;
    const res = await this.service.login.login(data);
    if (res === 0) {
      ctx.body = res_error;
    } else {
      ctx.body = res_success;
      const token = app.jwt.sign(
        {
          username: data.username, //需要存储的 token 数据
          //......
        },
        app.config.jwt.secret
      );
      // 返回 token 到前端
      ctx.body = { token };
    }
  }
}
