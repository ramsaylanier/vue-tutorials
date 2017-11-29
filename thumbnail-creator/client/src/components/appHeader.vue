<template>
  <header :class="$style.header">
    hi
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style module>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: purple;
  }
</style>