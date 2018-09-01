# 实时招聘app
## 技术栈
webpack+ react+redux+react-router+nodejs+mongodb
## 项目开发过程
1. 全局安装脚手架 `npm i -g create-react-app`,安装完毕后，`create-react-app chat`建立一个chat的项目，安装完毕之后进入`cd chat && npm run dev`启动开发项目， `npm run eject`弹出自定义配置
2. es6基础知识
3. *express + mongodb*
    +. mongodb的使用
       已经将mongodb安装的bin目录（D:\MongoDB\Server\3.4\bin)
       以管理员身份打开cmd, 先进入bin目录，执行./mongod, 开始服务，然后再打开一个powershell窗口，进入bin目录，执行./mongo连接
4. react基础知识 + UI库 antd-mobile + babel-plugin-transform按需加载
5. redux状态管理库，需要配合react-redux用在react项目中
6. react-router4
    + . BrowserRouter包裹整个应用
    + . Route路由对应渲染的组件，可嵌套
    + . Link跳转对应的路由
7. 前后端联动调式，配置反向代理
8. 身份验证机制cookie
 项目中遇到的难点-- 注册登陆部分的逻辑