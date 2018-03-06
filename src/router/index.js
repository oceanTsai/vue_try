import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@container/Hello'
import Hi from '@container/Hi'

Vue.use(VueRouter)

export default new VueRouter({
  mode: ROUTER_MODE,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    }    
  ]
})
