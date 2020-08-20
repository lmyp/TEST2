const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// var cors = require('cors');
// var corsOptions = {
//     origin: 'http://localhost:8080', //只有百度可以访问
//     optionsSuccessStatus: 200 ,
 //       credentials: true
//   }
//   app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//     res.json({msg: '只有百度可以访问'})
//   })
app.use("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type, Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == 'OPTIONS')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// 全局配置
// app.use(cors());
// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');