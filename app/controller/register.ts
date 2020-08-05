import { Controller } from "egg";

export default class VerifyController extends Controller {
  //post方法检查验证码信息
  async register() {
    const res_err1 = { status: 1, message: "验证码出错" };
    const res_err2 = { status: 2, message: "用户名已存在,请更改后重试" };
    const res_err3 = { status: 3, message: "系统出错，请稍后再试一次" };
    const res_success = { status: 4, message: "用户注册成功" };
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(ctx);
    const captcha = await this.service.verify.getcaptcha();
    console.log(captcha);
    if ( captcha != data.verify) {
      ctx.body = res_err1;
    } else {
      const res = await this.service.register.register(data);
      switch (res) {
        case 2:
          ctx.body = res_err2;
          break;
        case 3:
          ctx.body = res_err3;
          break;
        case 4:
          ctx.body = res_success;
          break;
        default:
          ctx.body = res_err3;
      }
    }
    // console.log(data.verify);
  }
}
