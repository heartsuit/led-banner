import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'banner',
      component: require('@/components/Banner').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
