import Vue from 'vue'
import Router from 'vue-router'
import Manager from '@/pages/Manager'
import Home from '@/pages/Home'
import UserList from '@/pages/UserList'
import AddUser from '@/pages/AddUser'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Manager',
      component: Manager,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'user',
          name: 'User',
          component: UserList
        },
        {
          path: 'adduser',
          name: 'AddUser',
          component: AddUser
        }
      ]
    }
  ]
})
