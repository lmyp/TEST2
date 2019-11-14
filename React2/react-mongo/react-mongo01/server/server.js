// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = new express();
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// // 连接数据库
// mongoose.connect('mongodb://localhost:27017/reactTest');
// mongoose.connection
//     .on('open',function () {
//         process.env.connect_database = 1;
//         console.log('数据库连接成功');
 
//     })
//     .on('error',function () {
//         process.env.connect_database = 0;
//       console.log('数据库连接失败');
 
//     })


const express = require('express');
const userApi = require('./useApi.js')
const proxy = require('express-http-proxy');
    // 新建app
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// // 链接数据库
// mongoose.connect('mongodb://localhost:27017/reactTest')
// mongoose.connection.on('connected', function(){console.log('mongo 链接成功')})
// // 创建User模型
// const User = mongoose.model('users', new mongoose.Schema({
//        name:{type:String, require:true},
//        age:{type:Number, require: true}
// }))
 
   // 新增数据
// User.create({
//     name:'Kenny',
//     age:30
// },function(err, doc){
//      if(!err)  {console.log(doc)}
//      else{console.log(err)}
//  })
 

// 新建app
const app = express(); 
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  // res.header('Access-Control-Allow-Origin', "http://localhost:8088");
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200); //让options尝试请求快速结束
  else
      next();
})
// app.use('/data', proxy('http://localhost:9093/data'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api/user', userApi)
// app.get('/', (req, res)=>{
//   res.send('<h1>Hello world!</h1>')
// })
// 添加数据
// app.get('/data', (req, res)=>{
//     User.find({}, function(err, doc) {
//         res.send(doc)   
//     })

// })    
// 删除数据
// app.get('/delete', function(req, res) {
//   User.remove({age: 18}, function(err, doc) {
//       res.json(doc)
//   })
// })
// 更新数据
// app.get('/update', function(req, res) {
//   // update(更新哪条记录，｛'$set': 更新当前记录的哪些值}, 更新成功后的回调函数)
//   User.update({'user': 'Kenny'}, {'$set': {age: 26}}, function(err, doc) {
//       res.json(doc)
//   })
// })
app.listen(9093,function(req, res){
  console.log('Node app start at port 9093')
})

