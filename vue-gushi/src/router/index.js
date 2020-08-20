import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import My from '@/page/My'
import Detail from '@/page/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
