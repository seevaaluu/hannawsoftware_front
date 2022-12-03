<template>
  <nav>
    <v-navigation-drawer :xs2="$vuetify.breakpoint.mobile" v-model="displayed" class="sidebar" color="#ffffff" plain
      flat app>
      <v-list shaped dense nav class="mt-15">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> </v-list-item-title>
            <v-list-item-subtitle> </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item-group v-model="selectedItem" color="#fed330">
          <v-list-item v-for="(item, i) in items" :key="i" :ripple="false" :to="item.to">
            <v-list-item-icon>
              <v-icon small v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-if="$vuetify.breakpoint.mobile == true" v-slot:append>
        <div class="pa-2">
          <v-form id="logout-form" method="post" action="/logout">
            <v-btn type="submit" form="logout-form" color="primary" rounded text block>
              Cerrar sesión <v-icon right>fas fa-sign-out-alt</v-icon>
            </v-btn>
          </v-form>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>


export default {
  data() {
    return {
      modules: [],
      items: [
        { title: "Dashboard", to: "/home", icon: "dashboard", kind: "home" },
        { title: "Entrenadores", to: "/entrenadores", icon: "groups", kind: "entrenadores" },
      ],
      selectedItem: 0,
      drawer: null,
      displayed: true,
    };
  },
  watch: {
    "$store.state.showMenuButton": function (value) {
      this.displayed = value;
    },
  },
  methods: {
    isActive: function (item) {
      return this.$route.path.includes(item.kind);
    },
  },
};
</script>

<style scoped>
.bottom-btn-div {
  position: absolute;
  bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: "center";
}

.border {
  background: #0dcaf0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  text-decoration: none;
  border: 0px solid #ffffff !important;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.05);
}

/*
.link-module:hover {
  text-decoration: none;
}

.csi-nav-button {
  visibility: visible;
}

.icon-sidebar-active {
  background-image: #fff;
  color: #fff;
} */
</style>
