import { Controller } from 'egg';

export default class VerifyController extends Controller {
    //get方法获取验证码图像
    async index() {
        const { ctx } = this;
        let captcha = await this.service.verify.captcha(); // 服务里面的方法
        ctx.response.type = 'image/svg+xml';  // 知道你个返回的类型
        ctx.body = captcha.data; // 返回一张图片
    }
}