import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/verify', controller.verify.index); // 验证码
  router.post('/register', controller.register.register);//注册
  router.post('/login',controller.login.login);//登陆路由
};
