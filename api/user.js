const express = require('express')
const router = express.Router()
router.use((req,res,next)=>{
    console.log('Time: ',Date.now())
    next()
})

router.get('/info',(req,res)=>{
    const name= req.query.username
    res.send({message:'helllo',name,pwd:123})
})

module.exports=router