const express = require('express')
// 密码加密
const utils = require('utility')
const router = express.Router()
const models = require('./model')
const User = models.getModel('User')
function encrypt(pwd) {
    const salt  = 'dheufgu#@47547fdjfbr.~binj7v'
    return utils.md5(utils.md5(pwd+salt))
}
// 获取用户列表
router.get('/list',function(req,res) {
    User.find({},function(err, doc) {
        return res.json(doc)
    })
})
// 注册流程， 先查看数据库保证用户名唯一，然后再将用户信息写入cookie
router.post('/register', function(req, res){
    console.log(req.body);
    let {user, pwd, type} = req.body
    User.findOne({user}, function (err, doc){
        if(doc) {
            return res.json({code:1, msg: '用户名重复'})
        }
        User.create({user, pwd: encrypt(pwd), type}, function(err, doc) {
            if(err) {
               return  res.json({code: 1, msg: '注册失败'})
            }
            return  res.json({code: 0, msg: '注册成功'})
        })

    })
})
// 登陆
router.post('/login', function(req, res){
    console.log(req.body);
    let {user, pwd} = req.body
    User.findOne({user}, function (err, doc){
        if(!doc) {
            return res.json({code:1, msg: '用户名不存在'})
        }
        res.cookie('userid', doc._id)
        return res.json({code:0, msg: '登陆成功'})

    })
})
router.get('/info', function(req, res){
    return res.json({code:1});
})
router.post('/register')
module.exports = router