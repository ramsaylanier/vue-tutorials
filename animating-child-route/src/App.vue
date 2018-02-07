<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./styles/normalize";
  @import "./styles/base.scss";
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700');

  #app {
    font-family: 'Rubik', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *{
    box-sizing: border-box;
  }
</style>
