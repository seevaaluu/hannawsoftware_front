<template>
  <div>
    <v-main class="v-main-class">
      <menu-component />
      <sidebar-component />
      <statistics-component />
      <router-view />
    </v-main>
  </div>
</template>

<script>

  import MenuComponent from '../components/dashboard/MenuComponent.vue'
  import SidebarComponent from '../components/dashboard/SidebarComponent.vue'
  import StatisticsComponent from '../components/dashboard/StatisticsComponent.vue'

  export default {
    components: {
      MenuComponent,
      SidebarComponent,
      StatisticsComponent
    }
  }
</script>