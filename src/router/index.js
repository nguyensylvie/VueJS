import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id(\\d+)',
    name: 'Details',
    props: true,
    component: Details,
    children: [
      {
        path: 'edit',
        component: Edit
      }
    ]
  },
  {
    path: '/movieadd',
    name: 'Add',
    component: Add
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
