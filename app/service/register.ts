const Service = require('egg').Service;
export default class RegisterService extends Service {
    async register(data: any) {
        const res = await this.app.mysql.get('ms_login', {username: data.username});
        if( res ){
            console.log(1);
            return 2;//用户名已存在
        }else{
            const ins = await this.app.mysql.insert('ms_login', { username: data.username, password: data.password })
            const updateSuccess = ins.affectedRows === 1;
            if( !updateSuccess ){
            return 3;//系统出错
            } else {
            return 4;//用户注册成功
            }
        }
    }
}