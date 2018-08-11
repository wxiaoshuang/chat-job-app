// const mongoose = require('mongoose');
// // 链接mongo,并且指定数据库是myapp
// const DB_URL = 'mongodb://localhost:27017/myapp';
// mongoose.connect(DB_URL, { useNewUrlParser: true });
// mongoose.connection.on('connected', function () {
//     console.log('mongo connect success');
// });
// // 定义文档类型
// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: String, required: true }
// });
// // 创建模型
// const User = mongoose.model('User', UserSchema);
// app.get('/', function (req, res) {
//     res.send('<h1>9093</h1>');
// });
// // 返回json数据
// app.get('/data', function (req, res) {
//     // 查找数据库的数据，数组的形式
//     User.find({}, function (err, doc) {
//         res.json(doc);
//     });
// });
// app.get('/dataOne', function (req, res) {
//     // 查找数据库的数据,findOne对象的形式
//     User.findOne({age: '14'}, function (err, doc) {
//         res.json(doc);
//     });
// });
// app.get('/add', function (req, res) {
//     //新增数据,doc是新增的一个文档
//     User.create({ name: 'Anna', age: '14' }, function (err, doc) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(doc);
//         }
//     });
// })
// // 删除数据、
// app.get('/delete', function (req, res) {
//     User.remove({ age: '14' }, function (err) {
//         if (!err) {
//            res.send('delete sucess');
//         }
//     })
// });
// // 更新数据，doc是更新成功提示
// app.get('/update', function (req, res) {
//     User.update({ name: 'Anna' }, {$set: {age :'20'}}, function (err,doc) {
//         if (!err) {
//            res.json(doc);
//         }
//     })
// });