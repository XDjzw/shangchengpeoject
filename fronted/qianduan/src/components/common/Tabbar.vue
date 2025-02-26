<template>
 <div class="tabbar">
       <ul>
         <li v-for="(item,index) in routerList":key="index" @click="switchTab(item.path)" :class="{ active: isActive(item.path) } ">
            <span>{{ item.title }}</span>
         </li>
         
       </ul>
 </div>
</template>

<script setup>
 import {ref} from 'vue'
 import {useRoute,useRouter} from 'vue-router'
 let router=useRouter()
 let route=useRoute()
 const routerList=ref([
        {title:'首页',path:'/home'},
        {title:'直播',path:'/live'},
        {title:'商城',path:'/shopping'},
        {title:'我的',path:'/my'}
])

const isActive = (path) => {
  return route.path === path
}
    const switchTab =(path)=>{
      router.push(path)
    }
</script>

<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
  z-index: 1000;
}

.tabbar ul {
  display: flex;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.tabbar li {
  flex: 1;
  text-align: center;
  cursor: pointer;
}

.tabbar li span {
  display: block;
  font-size: 14px;
  color: #333;
}

.tabbar li:hover span {
  color: #ff5f17; /* 当鼠标悬停时改变颜色 */
}
.tabbar li.active span {
  color: #ff5f17; /* 激活状态的颜色 */
  font-weight: bold; /* 可选：加粗字体 */
}
</style>