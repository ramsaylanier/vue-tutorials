<template>
  <div id="app">
    <div :class="$style.container">
      
    </div>
    <sidebar/>
    <sidebar-toggle/>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import SidebarToggle from '@/components/sidebarToggle.vue'

export default {
  name: 'app',
  components: {
    Sidebar, SidebarToggle
  }
}
</script>

<style>
  :root{
    --accent-color: #FFCB08;
    --primary-color: #820263;
    --dark-color: #2E294E;
  }
  
  *{
    box-sizing: border-box;
  }

</style>

<style module>
  .container{
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--primary-color);
  }
</style>
