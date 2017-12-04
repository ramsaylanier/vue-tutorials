import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Upload from '@/components/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upload/:key',
      name: 'Upload',
      component: Upload
    }
  ]
})
