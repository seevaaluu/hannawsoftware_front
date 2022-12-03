<template>
  <div>
    <menu-component />
    <sidebar-component />
  </div>
</template>

<script>

  import MenuComponent from '../components/dashboard/MenuComponent.vue'
  import SidebarComponent from '../components/dashboard/SidebarComponent.vue'

  export default {
    components: {
      MenuComponent,
      SidebarComponent
    }
  }
</script>