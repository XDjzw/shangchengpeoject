// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 假设这是你的主页组件
import Shopping from '../views/shopping.vue'; // 购物页面组件
import Live from '../views/Live.vue'; // 直播页面组件
import My from '../views/My.vue'; // 我的账户页面组件

const base =import.meta.env.VITE_BASE_URL || '/'
const routes = [
{
     path:'/',
     redirect:'/home'
}
,

  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/live',
    name: 'Live',
    component: Live
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
];

const router = createRouter({
  history: createWebHistory(base),
  routes
});

export default router;