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

      <v-row>
        <v-col cols="12" sm="12">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Los pokemones mas elegidos</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <poke-charts :options="options" />
            </v-card-text>
          </v-card>
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
    computed: {
      options: function() {
        return {
          chart: {
            type: 'bar'
          },
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          series: [{
            data: this.stats.most_selected_pokemon.map(item => { return { x: item.name, y: item.total } })
          }]
        }
      }
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
