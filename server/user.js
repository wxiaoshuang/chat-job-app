const express = require('express')
const router = express.Router()
const models = require('./model')
const User = models.getModel('User')
// 获取用户列表
router.get('/list',function(req,res) {
    User.find({},function(err, doc) {
        return res.json(doc)
    })
})
router.post('/register', function(req, res){
    console.log(req.body.data);
})
router.get('/info', function(req, res){
    return res.json({code:1});
})
router.post('/register')
module.exports = router