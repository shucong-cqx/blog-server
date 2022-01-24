const connection = require('../config/database/connection')
const sqls = require('../config/database/sql')
class Allfunction {
    //注册函数
    async register(req, res) {
        //判断是否已注册

        //是

        //否
        
    }
    //密码登录函数
    async pwdLogin(req,res) {
        // 判断手机号是否注册

        //否 -> 注册

        //是 -> 登录

            //判断密码
    }
    //验证码登录
    async phoneLocin() {
        // 判断手机号是否注册

        //否 -> 注册

        //是 -> 登录
        
    }
    //获取用户信息
    async getUserInfo(req, res) {
        const { sql, params } = sqls.table
        const result = await connection(sql, params)
        console.log(result)
        const name = req.query.username
        res.send({
            code:200,
            result:result[0]
        })
    }
}

module.exports = new Allfunction()