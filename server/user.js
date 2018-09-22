const express = require('express')
// 密码加密
const utils = require('utility')
const router = express.Router()
const models = require('./model')
const User =  models.getModel('User');
// An instance of a model is called a document
// const User = new UserModels();
// 在 MongoDB 中，映射（Projection）指的是只选择文档中的必要数据，而非全部数据。如果文档有 5 个字段，而你只需要显示 3 个，则只需选择 3 个字段即可
// 不管是利用 AND 或 OR 条件来获取想要的字段列表都是显示一个文档的所有字段。要想限制，可以利用 0 或 1 来设置字段列表。1 用于显示字段，0 用于隐藏字段。
const _filter = {pwd: 0, __v: 0}
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
    User.findOne({user}, _filter, function (err, doc){
        if(doc) {
            return res.json({code:1, msg: '用户名重复'})
        }
        User.create({user, pwd: encrypt(pwd), type}, function(err, doc) {
            if(err) {
               return  res.json({code: 1, msg: '注册失败'})
            }
            res.cookie('userid', doc._id)
            const {user, type, _id} = doc;
            return  res.json({code: 0, msg:'注册成功',data: {user, type, _id}})
        })
    })
})
// 登陆
router.post('/login', function(req, res){
    console.log(req.body);
    let {user, pwd} = req.body
    User.findOne({user}, _filter, function (err, doc){
        if(!doc) {
            return res.json({code:1, msg: '用户名不存在'})
        }
        res.cookie('userid', doc._id)
        const {user, type, _id} = doc;
        return res.json({code:0, msg:'登录成功', data: {user, type, _id}})

    })
})
// 获取用户信息
router.get('/info', function(req, res){
    const {userid} = req.cookies
    if(!userid) {
        return res.json({code: 1 , msg: '尚未登录'})
    }
    User.findOne({_id: userid}, _filter,function(err, doc) {
        if(err) {
            return res.json({code:1, msg: '后端出错'})
        }
        return res.json({code: 0, msg: '成功', data: doc})
    })
})
// 更新用户信息
router.post('/update', function(req, res){
    const {userid} = req.cookies
    const body = req.body
    if(!userid) {
        return res.json({code: 1 , msg: '请先登录'})
    }
    // 更新方法默认不会返回更新后的数据，还是返回原数据，需要将options的new设置为true
    User.findByIdAndUpdate({_id: userid}, body, {new: false}, function(err, doc) {
        if(err) {
            return res.json({code:1, msg: '更新失败'})
        }
        console.log('update-doc', doc);
        let data = Object.assign({}, {type: doc.type, user: doc.user}, body)
        return res.json({code: 0, msg: '更新成功', data})
    })
})
router.post('/register')
module.exports = router