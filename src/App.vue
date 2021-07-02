<template>
  <v-app>
    <v-app-bar app color="white" dark>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://unifi.solutions//img/logo.70ad26f1.webp"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
     <div class="hidden-xs-only">

      <template  v-if="$store.getters.isAuthenticated"
       >
       <div class="d-flex justify-center align-center" style="width:25vw;">

      <router-link to="/">
          <v-list-item-title class="dark--text mx-2"> Home</v-list-item-title>
      </router-link>

      <router-link to="/create-recipe">
          <v-list-item-title class="dark--text mx-2">Add Recibe</v-list-item-title>
      </router-link>
      <v-btn
        color="red "
        class="dark--text mx-2"
        light
        @click="logout"
        text
      >
        <span>Logout</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
              </div>
    </template>

      <template v-else  >
     

       <div class="d-flex justify-center" style="width:20vw;">
     <router-link to="/">
          <v-list-item-title class="dark--text mx-2"> Home</v-list-item-title>
      </router-link>

        <router-link to="login">
          <v-list-item-title class="dark--text mx-2"> Login</v-list-item-title>
        </router-link>
       

            <router-link to="register">
          <v-list-item-title class="dark--text mx-2"> Register</v-list-item-title>
              </router-link>

       </div>

      </template>
      </div>







      <div class="hidden-sm-and-up">
  <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
        >
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </template>

      <v-list>


      <template  v-if="$store.getters.isAuthenticated" >

      <router-link to="/">
              <v-list-item>
          <v-list-item-title class="dark--text"> Home</v-list-item-title>
                  </v-list-item>

      </router-link>

      <router-link to="/create-recipe">
              <v-list-item>
          <v-list-item-title class="dark--text">Add Recibe</v-list-item-title>
                  </v-list-item>

      </router-link>
      <v-btn
        color="red "
        class="dark--text"
        light
        @click="logout"
      >
        <span>Logout</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </template>

      <template v-else >
     

     <router-link to="/">
                   <v-list-item>
          <v-list-item-title class="dark--text"> Home</v-list-item-title>
                        </v-list-item>

      </router-link>

        <router-link to="login">
                        <v-list-item>

          <v-list-item-title class="dark--text"> Login</v-list-item-title>
                        </v-list-item>

        </router-link>
       

            <router-link to="register">
                            <v-list-item>

          <v-list-item-title class="dark--text"> Register</v-list-item-title>
                        </v-list-item>

              </router-link>


      </template>

      </v-list>
    </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__lightSpeedInLeft"
        leave-active-class="animate__animated animate__lightSpeedOutRight"
       >
      <router-view />
      </transition>

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
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>