<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
p,
li,
ul {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
</style>
