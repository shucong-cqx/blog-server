//导入MySQL模块
const mysql = require('mysql')
//导入数据库连接参数
const config = require('./config').db
//数据库连接封装
module.exports = function (sql, params) {
    //返回一个promise对象
    return new Promise((resolve, reject) => {
        const pool = mysql.createPool(config)
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('error connecting: ' + err.stack)
                return

            }
            connection.query(sql, params, (err, res, fields) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(res)
                }
                connection.release()
            })
        })
    })
}
