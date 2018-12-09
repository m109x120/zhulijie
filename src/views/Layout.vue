<template>
<el-container class="container">
  <el-header class="header">
    <header-nav></header-nav>
  </el-header>
  <el-main class="main">
    <!-- 容器组件 -->
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue'
export default {
  components: {
    HeaderNav
  },
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container {
  height: 100%;
}

.header {
  text-align: center;
  /* background: #b3c0d1; */
}

.main {
  background-color: #E9EEF3;
  height: 100%;
}

</style>
