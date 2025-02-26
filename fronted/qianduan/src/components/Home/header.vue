<template>
    <header class="navbar">
      <!-- 左边：目录 -->
      <div class="left-side">
        <i class="iconfont icon-mulu"></i>
      </div>
  
      <!-- 中间：搜索栏 -->
      <div class="center-side">
        <input type="text" placeholder="搜索商品..." class="search-input"/>
        <i class="iconfont icon-chazhao search-icon"></i>
      </div>
  
      <!-- 右边：聊天 -->
      <div class="right-side">
        <i class="iconfont icon-liaotian"></i>
      </div>
    </header>
  </template>
  
  <script setup>
  // 如果有脚本逻辑，可以在这里编写
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between; /* 在水平方向上分配空间 */
    align-items: center; /* 垂直居中对齐 */
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* 左侧目录图标 */
  .left-side {
    display: flex;
    align-items: center;
  }
  
  /* 中间的搜索栏 */
  .center-side {
    flex-grow: 1; /* 让中间部分尽可能占据剩余空间 */
    position: relative; /* 用于相对定位搜索图标 */
    display: flex;
    align-items: center;
  }
  
  .search-input {
    width: 100%;
    padding: 8px 36px 8px 12px; /* 给右侧图标留出空间 */
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box; /* 确保padding不会影响宽度 */
  }
  
  .search-icon {
    position: absolute;
    right: 12px;
    color: #999;
    cursor: pointer;
  }
  
  /* 右侧聊天图标 */
  .right-side {
    display: flex;
    align-items: center;
  }
  
  /* 调整图标的大小 */
  .iconfont {
    font-size: 24px;
    margin: 0 10px;
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    .navbar {
      padding: 5px 10px;
    }
  
    .search-input {
      font-size: 12px;
      padding: 6px 30px 6px 10px;
    }
  
    .iconfont {
      font-size: 20px;
    }
  }
  </style>