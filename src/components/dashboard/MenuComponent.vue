<template>
  <v-toolbar class="elevation-2">
    <v-toolbar-title>Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>logout</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    created() {
      if(!this.$store.state.auth) {
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>