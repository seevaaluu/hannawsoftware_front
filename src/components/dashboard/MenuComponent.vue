<template>
  <v-toolbar class="elevation-2">
    <v-toolbar-title>Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="logout()">
      <v-icon>logout</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { errorHandling, getApiHost } from '@/lib/utilities';
  import axios from 'axios';

  export default {
    methods: {
      logout: function() {
        axios.post(`${getApiHost()}/api/logout`)
        .then(() => {
          this.$router.push({name: 'login'})
        })
        .catch(error => errorHandling(error));
      }
    },
    created() {
      if(!this.$store.state.auth) {
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>