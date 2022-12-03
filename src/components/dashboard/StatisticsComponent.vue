<template>
  <v-container>
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="12" sm="6" md="6" lg="4">
          <statistic-card title="Entrenadores" quantity="10" color="#FFCE4B" />
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="4">
          <statistic-card title="Pokemones" quantity="10" color="#A8A878" />
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="4">
          <statistic-card title="Entrenadores" quantity="10" color="#A040A0" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import StatisticCard from './StatisticCardComponent.vue';

  export default {
    components: {
      StatisticCard
    } 
  }
</script>
