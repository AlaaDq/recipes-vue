<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        color="red "
        class="white--text"
        v-if="$store.getters.isAuthenticated"
        light
        @click="logout"
      >
        <span>Logout</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <template v-else >
       <div class="d-flex justify-space-around" style="width:10vw">

        <router-link to="login">
          <v-list-item-title class="white--text"> Login</v-list-item-title>
        </router-link>

            <router-link to="register">
          <v-list-item-title class="white--text"> Register</v-list-item-title>
              </router-link>
       </div>

      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
};
</script>
