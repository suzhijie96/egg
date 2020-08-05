import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    this.ctx.cookies.set('name','123');
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
