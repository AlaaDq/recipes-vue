<template>
  <v-container>
    <h2>edit Recipe</h2>
    <recipe-form
      buttonText="Edit"
      :submitForm="updateRecipe"
      :isEditForm="true"
    ></recipe-form>
  </v-container>
</template>

<script>
import RecipeForm from "../components/RecipeForm.vue";
export default {
  components: { RecipeForm },
  methods: {
    updateRecipe(recipe) {
      const formData = new FormData();
      formData.append("name", recipe.name);
      formData.append("description", recipe.description);

      //add file if it was updated
      if (recipe.updateImageFlag)
        recipe.files.forEach((file) => {
          formData.append("files[]", file);
        });

      this.$store
        .dispatch("updateRecipe", {
          name: this.$route.params.name,
          newItem: formData,
        })
        .then((response) => {
          // we can add snackbar to show success message
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>