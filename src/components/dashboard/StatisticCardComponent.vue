<template>
  <v-card class="card-count" :color="color" dark>
    <v-card-text>
      <p class="text-h5 font-weight-bold">{{ title }}</p>
    </v-card-text>
    <v-card-actions>
      <v-chip class="text-h7 font-weight-bold ma-2 pokechip" color="white" dark>
        {{ quantity }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: String,
      quantity: String,
      color: String
    }
  }
</script>

<style scoped>
.button-counter {
    pointer-events: none !important;
  }

  .card-count {
    background-clip: border-box !important;
    border-radius: 1rem !important;
    background-image: url('https://vipyme-templates.s3.us-west-2.amazonaws.com/redpda/img/white-pokeball.png');
    background-position: bottom 5px right 7px;
    background-size: 22%;
  }

  .pokechip {
    color: black;
  }
</style>