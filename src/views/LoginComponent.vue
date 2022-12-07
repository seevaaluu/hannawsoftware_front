<template>
  <div class="login-container">
    <v-row>
      <v-col cols="12" md="6" class="column-login first_column_login">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-card flat color="#0190ff" dark>
              <v-toolbar dark color="#0190ff" flat>
                <v-spacer></v-spacer>
                <v-toolbar-title class="font-weight-bold">Bienvenido</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <div class="font-weight-bold">
                  Ingresa tus datos para acceder al administrador
                </div>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-container>
        <div class="custom-shape-divider-bottom-1670016865">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"></path>
          </svg>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card>
                <v-toolbar dark color="#fed330" flat>
                  <v-spacer></v-spacer>
                  <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="email" name="email" label="Correo" type="email" placeholder="Email" />
                    <v-text-field v-model="password" name="password" label="Contraseña" type="password" placeholder="Contraseña" />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="getAuth()" dark block class="mt-4" color="#fed330">Entrar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        email: null,
        password: null
      };
    },
    methods: {
      async getAuth() {
        await this.$store.dispatch('login', {
          email: this.email, 
          password: this.password
        })
      }
    }
  }

</script>

<style scoped>
.login-container {
    height: 100vh;
  }

  .column-login {
    height: 100vh;
  }
  .first_column_login {
    background-color: #0190ff;
    height: 102vh;
  }
  .custom-shape-divider-bottom-1670016865 {
    position: absolute;
    bottom: -1%;
    left: 0;
    width: 101%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1670016865 svg {
    position: relative;
    display: block;
    width: calc(282% + 1.3px);
    height: 238px;
  }

  .custom-shape-divider-bottom-1670016865 .shape-fill {
    fill: #FFFFFF;
  }
</style>