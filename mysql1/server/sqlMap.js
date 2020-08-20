/**
 * Created by xiaoze on 2017/12/5.
 */
// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)',
    // detele: 'delete from user where id='+req.body.id
  }
}
module.exports = sqlMap
