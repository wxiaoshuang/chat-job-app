// 启动一个简单的http服务器
const express = require('express');
const app = express();
app.get('/',function(req,res) {
    res.send('<h1>9093</h1>');
});
// 返回json数据
app.get('/data',function(req,res) {
    res.json({name:'hello world!' });
});
// nodemon监控node程序，自动重启
app.listen(9093,function() {
    console.log('node app is listening to the port 9093');
})