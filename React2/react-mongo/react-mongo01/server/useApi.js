var express = require('express')
var router = express.Router();

const mongoose = require('mongoose');
// 链接数据库
mongoose.connect('mongodb://localhost:27017/reactTest')
mongoose.connection.on('connected', function(){console.log('mongo 链接成功')})
// 创建User模型
const User = mongoose.model('users', new mongoose.Schema({
       name:{type:String, require:true},
       age:{type:Number, require: true}
}))
// 显示数据
router.get('/findUser', (req, res) => {
    var params = req.body;
    console.log('add',params);
    User.find({}, function(err, doc) {
		console.log('Finddoc:',doc)
        res.send(doc)   
    })
  });

// router.post('/addUser', (req, res, next) => {
//   let newItem = req.body;
//   console.log('newItem:',newItem)
// User.create({
//     name:req.body.name,
//     age:req.body.age
// },function(err, doc){
//      if(!err)  {console.log(doc)}
//      else{console.log(err)}
//  })
// })
// 增加数据
router.post('/addUser', (req, res, next) => {
  let newItem = req.body;
  console.log(newItem)
	User.create(
    newItem
    , (err) => {
		if (err) {
			console.log(err);
		}else {
			User.find({}, (err, doc) => {
				if (err) {
					console.log(err);
				}else {
					console.log('add:',doc)
					res.send(doc)
				}
			});
		}
	})
})
// 更新数据
router.post('/updateUser', function(req, res) {
let newItem = req.body;
  console.log('up:',newItem)
//   var whereStr = {_id:newItem._id};
  var whereStr = {name:newItem.name};
  console.log('whereStr:',whereStr)
  // update(更新哪条记录，｛'$set': 更新当前记录的哪些值}, 更新成功后的回调函数)
//   User.update({'name': 'Kenny'}, {'$set': {age: 26}}, function(err, doc) {
// 	  console.log('updata:',doc)
//       res.json(doc)
//   })
var updateStr = {$set: { name : newItem.name,age: newItem.age}};
	User.updateOne(whereStr, updateStr, function(err, doc) {
	if (err) throw err;
	console.log("doc:",doc);
	res.send(doc)
	
});
})

// 删除数据
router.post('/deleteUser', function(req, res) {
	let newItem = req.body;
  	console.log('delete:',newItem)
  	User.remove({name: newItem.name,age:newItem.age}, function(err, doc) {
	  res.send(doc)
	  console.log('dedoc:',doc)
  	})
})

// 查找数据
router.post('/findUser',function(req,res) {
	let newItem = req.body;
	console.log('find:',newItem)
	User.find({name:newItem.name,age:newItem.age},{name:true,age:true,_id:false},function(err,doc) {
		console.log('findDoc:',doc)
		res.send(doc)
	})
})
module.exports = router;