<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="col-table">
          <v-card 
            class="mx-auto mt-15"
            max-width="85%"
          >
            <v-toolbar
              flat
            >
              <v-toolbar-title>Listado de entrenadores</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Id</th>
                      <th class="text-left">Usuario</th>
                      <th class="text-left">Nombre completo</th>
                      <th class="text-left">Pokemones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in trainers.data" :key="i">
                      <td>{{ item.id }}</td>
                      <td>{{ item.id_user}}</td>
                      <td>{{ item.name }}  {{ item.last_name }}  {{ item.second_last_name }}</td>
                      <td>
                        <v-btn 
                          v-for="(pokemon, i) in item.pokemons" 
                          @click="openPokemonDetails(pokemon.id_api)"
                          color="secondary" 
                          :key="i" 
                          class="mr-1"
                          outlined 
                          x-small 
                          dark
                        >
                          {{ pokemon.name }}
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <v-card-actions>
              <paginator
                :limit="10" 
                :data="trainers" 
                @pagination-change-page="getTrainers"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Modals -->
    <pokemon-detail-modal 
      :show.sync="showPokemonDetails"
      :pokemon-id="currentApiPokemonId"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import { errorHandling } from '@/lib/utilities';

  import PokemonDetailModal from '../pokemons/PokemonDetailModalComponent.vue'

  export default {
    data() {
      return {
        trainers: {
          data: []
        },
        currentApiPokemonId: null,
        showPokemonDetails: false,
      }
    },
    components: {
      paginator: require('laravel-vue-pagination'),
      PokemonDetailModal
    },  
    methods: {
      getTrainers: function(page = 1) {
        axios.get(`http://localhost:8000/api/entrenadores?page=${page}`)
        .then(response => this.trainers = response.data)
        .catch(error => errorHandling(error))
      },
      openPokemonDetails: function(apiPokemonId) {
        this.currentApiPokemonId = apiPokemonId;
        this.showPokemonDetails = true;
      }
    },
    created() {
      this.getTrainers();
    }
  }
</script>

<style>
  .col-table { 
    color: blanchedalmond;
  }
</style>