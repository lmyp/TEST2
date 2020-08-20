<template>
  <div class="hello">
    <el-row>
      <el-button type="primary">主要按钮</el-button>
    </el-row>
    <form>
      <input type="text" name="name" v-model="name"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
    <div class="grid">
            <div>
                <h1>图书管理</h1>
                <div class="book">
                    <div>
                        <label for="id">
                            编号
                        </label>
                        <input type="text" id="id" v-model="id" :disabled="flag" v-focus />
                        <label for="id">
                            名称
                        </label>
                        <input type="text" id="name" v-model="name" /><br/>
                        <label for="id">
                            作者
                        </label>
                        <input type="text" id="author" v-model="author" />
                        <label for="id">
                            分类
                        </label>
                        <input type="text" id="category" v-model="category" />
                        <label for="id">
                            描述
                        </label>
                        <input type="text" id="description" v-model="description" />
                        <button @click="handle" :disabled="submitFlag">提交</button>
                    </div>
                </div>
            </div>
            <div class="total">
                <span>图书总数</span>
                <span>{{total}}</span>
            </div>
            <!-- <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>名称</th>
                        <th>作者</th>
                        <th>分类</th>
                        <th>描述</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in books" :key="item.id">
                        <td>{{item.bookid}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.author}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.description}}</td>
                        <td>
                            <a href="" @click.prevent="toEdit(item.bookid)">修改</a>
                            <span>|</span>
                            <a href="" @click.prevent="deletebook(item.bookid)">删除</a>
                        </td>
                    </tr>
                </tbody>
            </table> -->
            <el-table
            :data="books"
            border
            style="width: 100%,height: 100%">
            <el-table-column
                label="编号"
                width="50">
                <template slot-scope="scope">
                    <!-- {{scope.$index}} // 0 1 2 3 -->
                    <span style="margin-left: 10px">{{ scope.row.bookid }}</span>
                </template>
            </el-table-column>
            
            <el-table-column
                label="姓名"
                class="commonStyle"
                width="120">
                <template slot-scope="scope">
                    <span class="commonStyle" style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="作者"
                width="120">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.author }}</span>
                </template>
                </el-table-column>
            <el-table-column
                label="分类"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.category }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="描述"
                width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.description }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="189">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="toEdit(scope.row.bookid)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="deletebook(scope.row.bookid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.directive('focus', {
    inserted: function(el) {
        el.focus()
    }
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      flag: false,
      submitFlag: false,
      author: '',
      category: '',
      description: '',
      id: '',
      name: '',
      age: '',
      books: []
    }
  },
  inject: ['reload'],
  methods: {
   
    addUser() { 
      var name = this.name;
      var age = this.age;
      console.log(name,age)
      axios.post('/api/user/addUser', {
        name: name,
        age: age
      },{}).then((response) => {
        console.log(response);
      })
    },
    handle() {
      if(this.flag) {
        // var ret = axios.put('/books'+ this.id, {
        //   name: this.name
        // })

        console.log('bianji')
        console.log(this.id,this.books)
        this.books.some((item) => {
          console.log('item',item)
          // var a = item.find((item) => item.id == this.id)
          // console.log('a',a)
          if(item.bookid == this.id) {
              console.log(this.id)
              // item.name = this.name
              // item.author = this.author
              // item.category = this.category
              // item.description = this.description
              var edit = {}
              edit.id = this.id
              edit.name = this.name
              edit.author = this.author
              edit.category = this.category
              edit.description = this.description
              this.$axios.post('/api/user/editUser', {
                editbook: edit,
              }).then((response) => {
                console.log('edit',response);
                this.$message.success('修改成功');
                this.reload()
              })
             //完成更新后需要终止循环
              return true
          }
        })
        this.flag = false
      } else {
        var book = {}
        book.id = this.id
        book.name = this.name
        book.author = this.author
        book.category = this.category
        book.description = this.description
        console.log(book)
        this.$axios.post('/api/user/addUser', {
          books: book
        },{}).then((response) => {
          console.log(response);
          if(response.status == 200) {
            this.$message.success('添加成功');
            this.reload()
          }
        })
      }
    },
    toEdit(id) {
      // var ret = axios.get('book' + id)
      console.log('edit',id)
      this.flag = true
      var book = this.books.filter(function(item) {
        return item.bookid == id
      })
      // console.log(book)
      this.id = book[0].bookid
      this.name = book[0].name
      this.author = book[0].author
      this.category = book[0].category
      this.description = book[0].description
    },
    deletebook(id) {
      console.log('del',id)
      this.$axios.post('/api/user/deleteUser', {
        id: id,
      }).then((response) => {
          console.log('detele',response);
          if(response.status == 200) {
            this.$message.success('删除成功');
            this.reload()
          }
      })
    }
  },
  mounted() {
    console.log('111111111')
      this.$axios.get('/api/user/chaxun', {
        
      }).then((res) => {
          console.log('res',res);
          this.books = res.data;
        })
      
  },
  computed: {
    total: function() {
      return this.books.length;
    a}
  },
}
</script>

<style scoped>
.hello {
  text-align: center;
}
.grid {
    margin: auto;
    width: 780px;
    text-align: center;
}
.grid table {
    width: 100%;
    border-collapse: collapse;
}
.grid th,td {
    padding: 10px;
    border: 1px dashed orange;
    height: 35px;
    line-height: 35px;
}
.grid th {
    background-color: orange;
}
.grid .book {
    padding-bottom: 10px;
    padding-top: 5px;
    background-color: #F3DCAB;
}
.grid .total {
    height: 30px;
    line-height: 30px;
    background-color: orange;
    border-top: 1px solid orange;
}
</style>
