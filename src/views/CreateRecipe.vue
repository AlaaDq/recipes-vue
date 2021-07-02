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
            
            recipe.files.forEach(file => {
     			formData.append('files[]', file)
            });

         


            this.$store.dispatch('createRecipe',formData).then((response)=>{
                
            })


                    }
            }
    }
</script>

<style lang="scss" scoped>

</style>