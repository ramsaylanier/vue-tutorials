<template>
  <button :class="[open ? $style.active : '', $style.button]" @click="handleClick">    
    <component :is="icon"/>
  </button>
</template>

<script>
  export default {
    name: 'sidebar-toggle',
    props: ['sidebarComponent', 'icon'],
    computed: {
      open () {
        return this.$store.state.ui.sidebarOpen && this.$store.state.ui.sidebarComponent === this.sidebarComponent
      }
    },
    methods: {
      handleClick () {
        this.$store.dispatch('toggleSidebar', {component: this.sidebarComponent})
      }
    }
  }
</script>

<style module>
  .button{
    padding: 0;
    height: 50px;
    width: 50px;
    border: 3px solid transparent;
    border-radius: 50%;
    background-color: transparent;
    color: var(--dark-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    transition: transform 300ms ease-out, border-color 300ms ease-out;
  }
  
  .button svg{
    height: 100%;
    width: 100%;
    fill: var(--accent-color);
    transition: fill 300ms ease-out;
  }
  
  .button:focus{
    outline: none;
    border-color: var(--accent-color);
  }
  
  .active{
    transform: rotate(45deg);
  }
  
  .active svg{
    fill: var(--primary-color);
  }
  
  .active:focus{
    border-color: var(--primary-color);
  }

</style>