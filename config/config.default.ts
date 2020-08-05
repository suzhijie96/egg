import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1596438074208_1176";

  // add your egg config in here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "localhost",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "123456",
      // 数据库名
      database: "ms",
      debug: true,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.jwt = {
    secret: "123456", //自定义 token 的加密条件字符串
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false,
    },
    domainWhiteList: ["http://127.0.0.1:4200"], //允许访问接口的白名单
    xframe: {
      enable: false,
    },
  };
  config.cors = {
    origin: "*", // 匹配规则  域名+端口  *则为全匹配
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
    credentials: true,
  };

  config.session = {
    key: "EGG_SESS", //eggjs默认session的key
    maxAge: 24 * 3600 * 1000, // 1 day
    httpOnly: true,
    encrypt: true,
    renew: true  //每次访问页面都会给session会话延长时间
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};
