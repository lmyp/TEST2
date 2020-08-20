<template>
  <div id="app">
    <ul>
      <router-link to="/home" tag="li" activeClass="myactive">首页</router-link>
      <router-link to="/my" tag="li" activeClass="myactive">我的</router-link>
    </ul>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.myactive {
  color: red;
  border-bottom: 2px solid rgb(255, 0, 0);
}
ul {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  padding-bottom: 2px;
}
li {
  flex: 1;
  list-style: none;
  line-height: 50px;
   text-align: center;
}
</style>
