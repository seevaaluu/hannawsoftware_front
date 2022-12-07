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
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25" class="shape-fill"></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5" class="shape-fill"></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
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
                <v-btn 
                  v-for="(item, i) in details.types" 
                  color="white" 
                  :key="i" 
                  class="mt-20 mb-1 btn-badge" 
                  outlined 
                  x-small
                  dark
                >
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

  .btn-badge {
    pointer-events: none;
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