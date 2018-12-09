import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Layout from '@/views/Layout'
import Members from '@/views/Members'
import Directions from '@/views/Directions'
import Results from '@/views/Results'
import Recruit from '@/views/Recruit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {path:'/',component:Home},
        {path: '/directions',component:Directions},
        {path: '/members',component:Members},
        {path: '/results',component:Results},
        {path: '/recruit',component:Recruit}
      ]
    }
  ]
})
