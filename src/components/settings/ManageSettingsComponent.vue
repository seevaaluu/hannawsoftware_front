<template>
  <div>
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="12" md="5">
          <v-card class="card-count" color="#6890F0" dark>
            <v-card-text>
              <p class="text-h5 font-weight-bold">Desactivar registro</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-switch color="white" inset v-model="setting.value" @change="activeForm"/>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--  -->
    <v-snackbar :value="snackbar.visible" absolute bottom color="success" outlined right>
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>

<script>
  import { errorHandling, getApiHost } from '@/lib/utilities';
  import axios from 'axios';

  export default {
    data: () => ({
      setting: {},
      snackbar: {
        visible: false,
        text: null
      }
    }),
    methods: {
      getSetting: function() {
        axios.get(`${getApiHost()}/api/configuraciones/disable_form`)
        .then(response => {
          this.setting = response.data;
          this.setting.value = this.setting.value == '1' ? true : false; 
        })
        .catch(error => errorHandling(error))
      },
      activeForm: function() {
        axios.patch(`${getApiHost()}/api/configuraciones/${this.setting.id}`, {
          value: this.setting.value
        })
        .then(response => {
          this.snackbar.text = response.data.message_text;
          this.snackbar.visible = true;
          this.getSetting();
        })
        .catch(error => errorHandling(error))
      }
    },
    created() {
      this.getSetting();
    }
  }
</script>