<template>
    <div class="homeContainer">
        <div class="content" 
            v-for="(item,index) in gushiList.slice(0,20)"
            @click="todetail(item.detailid,index)" 
            :key="index" >
            {{item.name}}-{{item.author}}-{{index}}
        </div>
    </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from 'vuex'
import axios from 'axios'
  export default {
    data() {
      return {
        gushi: [],
        shouchang: ''
      }
    },
    methods: {
      todetail(id,index) {
        // console.log('detailid',id)
        this.$router.push({
          name: 'detail',   // 只能用 name
          params: {
            gushiid: id
          }
        })
      }
    },
    mounted() {
      this.$store.dispatch('getData')
    },
    computed: {
      ...mapState(['gushiList','statusData'])
      
    },
   
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
    //   this.gushi = res.data.result
    // })
  

}
</script>

<style scoped>
.homeContainer{
    margin: 0;
    padding: 0;
}
.content {
    line-height: 40px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #000;
}
</style>