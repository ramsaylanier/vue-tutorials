<template>
  <div id="app">
    <div :class="$style.container">
      
    </div>
    <sidebar/>

    <div :class="$style.toggles">
      <sidebar-toggle :sidebarComponent="addForm" :icon="searchIcon"/>
      <sidebar-toggle :sidebarComponent="searchForm" :icon="addIcon"/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
import SidebarToggle from './components/sidebarToggle.vue'
import AddForm from './components/addForm.vue'
import SearchForm from './components/searchForm.vue'
import SearchIcon from './icons/search.vue'
import AddIcon from './icons/add.vue'

export default {
  name: 'app',
  components: {
    Sidebar, SidebarToggle
  },
  data () {
    return {
      addForm: AddForm,
      searchForm: SearchForm,
      searchIcon: SearchIcon,
      addIcon: AddIcon
    }
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

  .toggles{
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: flex;
  }
</style>
