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
  </div>
</template>

<script>
  import { errorHandling } from '@/lib/utilities';
  import axios from 'axios';

  export default {
    data() {
      return {
        trainers: {
          data: []
        }
      }
    },
    components: {
      paginator: require('laravel-vue-pagination')
    },  
    methods: {
      getTrainers: function(page = 1) {
        axios.get(`http://localhost:8000/api/entrenadores?page=${page}`)
        .then(response => this.trainers = response.data)
        .catch(error => errorHandling(error))
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