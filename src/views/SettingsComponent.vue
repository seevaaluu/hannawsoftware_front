<template>
  <v-main class="v-main-class">
    <menu-component />
    <sidebar-component />
    <router-view />
    <manage-settings/>
  </v-main>
</template>

<script>
import MenuComponent from '../components/dashboard/MenuComponent.vue'
import SidebarComponent from '../components/dashboard/SidebarComponent.vue'
import ManageSettings from '@/components/settings/ManageSettingsComponent.vue';

export default {
  components: {
    MenuComponent,
    SidebarComponent,
    ManageSettings
  }
}
</script>