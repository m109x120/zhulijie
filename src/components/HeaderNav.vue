<template>
<el-menu
:default-active="activeIndex"
class="el-menu-demo"
mode="horizontal"
@select="handleSelect"
:router='true'
>
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/directions">研究方向</el-menu-item>
  <el-menu-item index="/members">课题组成员</el-menu-item>
  <el-menu-item index="/results">学术成果</el-menu-item>
  <el-menu-item index="/recruit">招贤纳士</el-menu-item>
</el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '/',
    };
  },
  created (){
    this.fetchStatus()
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      console.log(this.activeIndex)
    },
    fetchStatus(){
      var cur_path = window.location.hash.replace("#",' ').trim()
      this.activeIndex = cur_path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
