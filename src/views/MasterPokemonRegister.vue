<template>
  <v-card flat class="main-v-card">
    <v-toolbar color="#c64444" dark extended flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-toolbar-title class="grey--text">
          Registro al torneo Pokemon
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text>
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-form ref="form" v-model="validForm">
                <v-container>
                  <v-row justify="space-around">
                    <v-col>
                      <div class="text-center text--primary mb-4">
                        Ingresa tus datos para participar en el torneo de entrenadores de Pokemon y selecciona
                        <br>
                        tus 6 pokemones favoritos
                      </div>
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field label="Id de usuario" filled v-model="personalData.id_user" :rules="rules" />
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field label="Email" filled v-model="personalData.email" :rules="rules" />
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field label="Nombre" filled v-model="personalData.name" :rules="rules" />
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field label="Apellido paterno" filled v-model="personalData.last_name" :rules="rules" />
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field label="Apellido materno" filled v-model="personalData.second_last_name" :rules="rules" />
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field label="Fecha de nacimiento" type="date" filled v-model="personalData.birthdate" :rules="rules" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#f4b615" :disabled="!validForm" style="color: white;" @click="step++">
                Siguiente
              </v-btn>
            </v-card-actions>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-container>
                <v-row justify="space-around">
                  <v-col v-for="(item, index) in data" :key="index" class="d-flex child-flex" cols="4">
                    <v-card>
                      <v-img :src="getPokemonImage(item.url)" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px">
                        <v-card-title v-text="item.name"></v-card-title>
                      </v-img>
                    
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-checkbox 
                          v-model="selected" 
                          :value="{
                            'id': getPokemonId(item.url),
                            'name': item.name
                          }"
                        />
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>  
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#f4b615" :disabled="(selected.length < 6)" style="color: white;" @click="storeTrainerPokemon">
                Guardar
              </v-btn>
            </v-card-actions>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <!--  -->
    <v-snackbar :value="snackbar.visible" absolute bottom color="success" outlined right>
      {{ snackbar.text }}
    </v-snackbar>
  </v-card>
</template>

<script>
  import axios from 'axios';
  import errorHandling from './../lib/utilities.js'

  export default {
    data: () => ({
      step: 1,
      personalData: {},
      snackbar: {
        visible: false,
        text: null
      },
      selected: [],
      checkbox: false,
      data: [],
      validForm: false,
      rules: [(v) => !!v || "Este campo es requerido"],
    }),
    watch: {
      selected: function() {
        if(this.selected.length > 6) {
          this.selected.shift()
        } 
      }
    },
    methods: {
      getPokemons: function() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0')
        .then(response => this.data = response.data.results)
        .catch(error => errorHandling(error))
      },
      getPokemonId: function(url) {
        let pokemonId = url.split('/').reverse()[1]
        return pokemonId;
      },
      getPokemonImage: function(url) {
        let pokemonId = url.split('/').reverse()[1]
        let urlPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
        return urlPokemon;
      },
      storeTrainerPokemon: function() {
        axios.post(' http://localhost:8000/api/entrenadores', {
          ...this.personalData,
          'pokemons': this.selected
        })
        .then(response => {
          this.snackbar.visible = true;
          this.snackbar.text = response.data.message_text;
          setTimeout(() => {
            location.reload(); 
          }, 1500);
        })
        .catch(error => console.log(error))
      }
    },
    created() {
      this.getPokemons();
    }
  }
</script>

<style scoped>
.main-v-card {
    background-color: #f6706f;
    background-image: url('https://i.pinimg.com/originals/46/dc/6a/46dc6aba55acce24953bbc1b09bd674c.png');
    background-repeat: repeat;
  }
</style>