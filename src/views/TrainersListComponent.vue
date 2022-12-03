<template>
  <v-main class="v-main-class">
    <menu-component />
    <sidebar-component />
    <trainers-table-component />
    <router-view />
  </v-main>
</template>

<script>
  import MenuComponent from '../components/dashboard/MenuComponent.vue'
  import SidebarComponent from '../components/dashboard/SidebarComponent.vue'
  import TrainersTableComponent from '../components/trainers/TrainersTableComponent.vue'

  export default {
    components: {
      MenuComponent,
      SidebarComponent,
      TrainersTableComponent
    }
  }
</script>