<template>
  <div id="app">
    <h3>根组件</h3>
    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
      <li>
        <router-link to="/move">电影</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {}
  }
</script>

<style lang="less">
  ul {
    display: inline-block;
    list-style: none;
  }

  li {
    padding: 0 10px;
    float: left;
  }
</style>
