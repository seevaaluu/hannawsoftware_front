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
                    <v-text-field name="email" label="Correo" type="email" placeholder="Email" />
                    <v-text-field name="password" label="Contraseña" type="password" placeholder="Contraseña" />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn type="submit" dark block class="mt-4" color="#fed330">Entrar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

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
</style>