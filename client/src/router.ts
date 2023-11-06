import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MyHello from './components/MyHello.vue'
import Posts from './components/Posts.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/myhello',
    name: 'my-hello',
    component: MyHello
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router