<template>
    <v-container>
      <h2>craete Recipe</h2>
        <recipe-form
        buttonText="craete" :submitForm="craeteRecipe"
        ></recipe-form>
    </v-container>
</template>

<script>
import RecipeForm from '../components/RecipeForm.vue'
    export default {
  components: { RecipeForm },
        methods:{
            craeteRecipe(recipe){
                console.log(recipe)
            const formData = new FormData()
		    formData.append('name', recipe.name)
		    formData.append('description', recipe.description)
		    // formData.append('files', recipe.files)
            recipe.files.forEach(file => {
     			formData.append('files[]', file)
            });

         
            //  for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1]);
            //  }


            this.$store.dispatch('createRecipe',formData).then((response)=>{
                
            })


                    }
            }
    }
</script>

<style lang="scss" scoped>

</style>