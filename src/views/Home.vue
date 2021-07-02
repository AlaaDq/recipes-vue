<template>
  <div>
    <GridList :action="'getAllRecipes'" :getter="'testing'">

      <!-- slot-scope pass dynamic markup for grid list  -->
      
      <v-card slot-scope="{ recipe }" class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src="recipe.image">
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ recipe.name }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ recipe.description }}</div>
        </v-card-text>

        <v-card-actions>
          <router-link :to="{ path: `/edit-recipe/${recipe.name}` }">
            <v-btn color="orange" text> edit </v-btn>
          </router-link>

          <v-btn color="red" text @click="deleteRecipe(recipe)"> Delete </v-btn>
        </v-card-actions>
      </v-card>

            <!-- end slot-scope   -->

    </GridList>
  </div>
</template>

<script>
import GridList from "@/components/GridList.vue";
export default {
  name: "Home",
  components: {
    GridList,
  },
  methods:{
    deleteRecipe(recipe){
      this.$store.dispatch('deleteRecipe',recipe).then((response)=>{
        console.log("deleted")
      })

    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>