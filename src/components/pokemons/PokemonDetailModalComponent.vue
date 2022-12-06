<template>
  <div>
    <v-dialog v-model="localShow" max-width="650px" persistent>
      <v-card :color="getColorType(details.types[0].type.name)">
        <v-toolbar class="toolbar-pokemon-detail" flat>
          <v-spacer></v-spacer>
          <v-toolbar-title class="title-pokemon-detail">{{ details.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="localShow = false" color="black">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <div class="custom-shape-divider-top-1670296656">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"></path>
            </svg>
          </div>
          <v-container class="full-container" >
            <v-row justify="center">
              <v-col cols="12" md="10" class="fill-height d-flex flex-column justify-center align-center">
                <v-img
                  :src="details.sprites.other['official-artwork']['front_default']"
                  width="55%"
                />
              </v-col>
              <v-col cols="12" md="10" class="fill-height d-flex flex-column justify-center align-center">
                <v-btn v-for="(item, i) in details.types" color="white" :key="i" class="mt-2" outlined x-small
                  dark>
                  {{ item.type.name }}
                </v-btn>
              </v-col>
              <v-col cols="12" md="10">
                <div class="stats-card" v-for="(item, i) in details.stats" :key="i">
                  <label class="stats-label" >{{ item.stat.name }}</label>
                  <v-progress-linear background-color="pink lighten-3" color="pink lighten-1" :value="item.base_stat"></v-progress-linear>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { errorHandling, getPokemonColorsType } from '@/lib/utilities';
import axios from 'axios';


  export default {
    data() {
      return {
        details: {
          types: [{
            type: null
          }],
          sprites:{
            other: {
              "official-artwork": ''
            }
          }
        },
        localShow: false,
        snackbar: {
          visible: false,
          text: null
        }
      };
    },

    props: {
      show: Boolean,
      pokemonId: String
    },

    methods: {
      getPokemonDetails: function() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
        .then(response => this.details = response.data)
        .catch(error => errorHandling(error))
      },
      getColorType: function (type) {
        let colors = getPokemonColorsType();
        return colors[type];
      }
    },

    watch: {
      show: function (value) {
        this.localShow = value
      },
      localShow: function (value) {
        this.$emit('update:show', value);
      },
      pokemonId: function() {
        this.getPokemonDetails()
      }
    }
  };
</script>

<style scoped>
.title-pokemon-detail {
    text-transform: capitalize;
  }
  .toolbar-pokemon-detail {
    z-index: 1;
  }

  .stats-card {
    background-color: white;
    padding: 2%;
    border-radius: 14px;
    margin: 2%;
  }

  .stats-label {
    text-transform: uppercase;
    font-weight: bolder;
  }

  .custom-shape-divider-top-1670296656 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1670296656 svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 320px;
  }

  .custom-shape-divider-top-1670296656 .shape-fill {
    fill: #FFFFFF;
  }
</style>