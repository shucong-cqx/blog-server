//导入express依赖
const express = require('express')
//导入内置path依赖
const path = require('path')
//导入cors依赖
const cors = require('cors')
const bodypraser = require('body-parser')
//创建一个express程序
const app = express()
//设置允许跨域访问该服务
app.use(cors())
//解析post body
app.use(bodypraser.urlencoded({extended:true}))
app.use(bodypraser.json())
//路由中间件

//暴露静态资源
app.use('/static', express.static(path.join(__dirname, '/static')))
//注册接口
app.use('/register',()=>{})
//登录接口
app.use('/login',()=>{})
//用户接口
app.use('/user', require('./api/user'))



app.listen(8080, () => {
    console.log('服务已开启')
})
