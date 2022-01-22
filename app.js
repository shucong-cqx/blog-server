//导入express模块
const express = require('express')
//创建一个express程序
const app = express()

const router = require('./api/user')
app.use('/user', router)

app.listen(8080, () => {
    console.log('服务已开启')
})
