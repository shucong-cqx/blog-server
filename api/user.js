const express = require('express')
const moment = require('moment')
const os = require('os')
const router = express.Router()
const network = os.networkInterfaces()

router.use('*',(req,res,next)=>{
    let time = moment().format("YYYY-MM-DD HH:mm:ss")
    console.log(time)
    next()
})
//获取所有用户信息
router.get('/info',require('./function').getUserInfo)

module.exports=router