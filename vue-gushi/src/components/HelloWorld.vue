<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- <div v-for="(item,index) in list" :key="index">
      {{item.name}}-{{index}}
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
// axios.defaults.baseURL='/tangshi'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  mounted() {
    // http://api.jisuapi.com/tangshi/chapter?appkey=7f2920c783c6865a
    //  let obj = {
    //     'output':'json',
    //     'appkey':'7f2920c783c6865a'
    //   }
    // 第一种方法
    // Vue 需要使用jsonp解决跨域时，可以使用（vue-jsonp）
    // this.$jsonp('http://api.jisuapi.com/tangshi/chapter/?appkey=7f2920c783c6865a').then(res => {
    //   console.log(res)  
    // })
  
  // 第二种方法
    // axios({
    //   method: 'get',
    //   // http://www.thenewstep.cn/test/testToken.php:
    //   url: `/api/tangshi/chapter?appkey=7f2920c783c6865a`,
    //   withCredentials: true,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   }
    // }).then(res => {
    //   console.log('res',res)
    //   this.list = res.data.result
    // })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
