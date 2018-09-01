// 启动一个简单的http服务器
const express = require('express');
const app = express();
const userRouter = require('./user');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter);
// nodemon监控node程序，自动重启
app.listen(9093, function () {
    console.log('node app is listening to the port 9093');
})