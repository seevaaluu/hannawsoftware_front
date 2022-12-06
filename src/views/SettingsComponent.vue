<template>
  <v-main class="v-main-class">
    <menu-component />
    <sidebar-component />
    <router-view />
  </v-main>
</template>

<script>
import MenuComponent from '../components/dashboard/MenuComponent.vue'
import SidebarComponent from '../components/dashboard/SidebarComponent.vue'

export default {
  components: {
    MenuComponent,
    SidebarComponent,
  }
}
</script>