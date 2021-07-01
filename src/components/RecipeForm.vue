<template>
  <div>
        <base-input
                   :label="'name'"
                    v-model="$v.recipe.name.$model"
                    :hasError="$v.recipe.name.$error">
        </base-input>
        <base-input :label="'description'"
                    v-model="$v.recipe.description.$model"
                    :hasError="$v.recipe.description.$error">
        </base-input>
        <base-file-upload
            :label="'recipe image'"
             v-on:files-loaded="recive($event)" v-on:clear-files="onClearFiles()">
        </base-file-upload>

        <v-btn color="success" @click="submitForm(recipe)" :disabled="$v.$invalid">{{buttonText}}</v-btn>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  import BaseInput from './BaseComponents/BaseInput.vue'
  import BaseFileUpload from './BaseComponents/BaseFileUpload.vue'

  export default {
    name: 'RecipeForm',
     props: {
       submitForm:  
       {
        type:Function,
        required:true
        },
       buttonText: 
       {
        type:String,
        default:'submit'
        },
    },

   data() {
      return {
        recipe: {
          name:'',
          description: '',
          files:[]
        },
      }
    },
    validations() {
        return {
             recipe: {
                 name:{required},
                 description: {required},
                 files:{required}
            },
        }
    },

    methods:{
        recive(e){
          this.recipe.files=e.files
        },
        onClearFiles(){
              this.recipe.files=[]
        },
    },
    components: {
      BaseInput,
      BaseFileUpload,
    },
  }
</script>

<style lang="scss" scoped>
</style> 