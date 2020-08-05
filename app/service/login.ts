const Service = require("egg").Service;

export default class LoginService extends Service {
  async login(data: any) {
    console.log(data);
    const res = this.app.mysql.get("ms_login", {
      username: data.username,
      password: data.password,
    });
    if (res) {
      return 1; //登陆成功
    } else {
      return 0; //登陆失败
    }
  }
}
