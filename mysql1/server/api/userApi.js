var models = require('../db.js');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap.js');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = 'insert into book2(bookid, name, author,category,description) values (?, ?, ?, ?, ?)';
    var params = req.body;
    console.log('params',params);
    conn.query(sql, [params.books.id, params.books.name,params.books.author,params.books.category,params.books.description,], 
        function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 查询
router.get('/chaxun', function (req, res) {
    // var params = req.body;
    // console.log('chaxun',params);

    // let pageSize = req.body.pageSize;
    // console.log(pageSize)
    // let sql = "SELECT * FROM user ORDER BY name DESC LIMIT "+start+","+end;
    let countSql = "SELECT * FROM book2 ";
    conn.query(countSql,(err,result) => {
    //   console.log('res',result) 
      // return result
      res.end(JSON.stringify(result))
    })
    
})
// 删除
router.post('/deleteUser', function (req, res) {
    let inputBody = req.body;
    console.log('inputBody',inputBody)
    let countSql = `DELETE  FROM book2 where bookid =${inputBody.id}` ;
    conn.query(countSql,(err,result) => {
      console.log('delete:',result) 
      // return result
      res.end(JSON.stringify(result))
    })
    
})
// 改数据
router.use('/editUser',function(req,res){
    let editUser = req.body
    console.log('editage',editUser)
    let editSql = `UPDATE book2 SET 
        name = '${editUser.editbook.name}', 
        author = '${editUser.editbook.author}',
        category = '${editUser.editbook.category}',
        description = '${editUser.editbook.description}' where bookid = '${editUser.editbook.id}' `
    conn.query(editSql,(err,result) => {
      console.log('edit',result)
      res.end(JSON.stringify(result))
    })
})
module.exports = router;