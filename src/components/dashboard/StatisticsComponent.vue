<template>
  <v-container>
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="12" sm="6" md="6">
          <statistic-card title="Entrenadores" :quantity="stats.trainers" color="#FFCE4B" />
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <statistic-card title="Pokemones" :quantity="stats.pokemons" color="#268cc8" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import { errorHandling, getApiHost } from '@/lib/utilities';
  import axios from 'axios';
  import StatisticCard from './StatisticCardComponent.vue';

  export default {
    data() {
      return {
        stats: {
          trainers: 0,
          pokemons: 0,
          most_selected_pokemon: []
        }
      };
    },
    components: {
      StatisticCard
    },
    methods: {
      getStats: function() {
        axios.get(`${getApiHost()}/api/estadisticas`)
        .then(response => this.stats = response.data)
        .catch(error => errorHandling(error))
      }
    },
    created() {
      this.getStats();
    }
  }
</script>
