const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');

export default class VerifyService extends Service {
  // 产生验证码
  async captcha() {
    const { ctx } = this;
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#cc9966'
    });
    ctx.session.code = captcha.text.toLowerCase();
    console.log('==000==', ctx.session);
    return captcha;
  }

  async getcaptcha() {
    console.log(this.ctx.session);
    const verify =  this.ctx.session.code;
    // console.log(verify);
    return verify;
  }
}
