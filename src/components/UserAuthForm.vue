<template>
  <div>
        <base-input
                    v-if="hasUserName"
                   :label="'username'"
                    v-model="$v.user.username.$model"
                    :hasError="$v.user.username.$error"
        >
        </base-input>


        <base-input :label="'email'"
                    v-model="$v.user.credentials.email.$model"
                    :hasError="$v.user.credentials.email.$error"
        >
        </base-input>

        <base-input 
                    :label="'password'"
                    :type="'password'"
                    v-model="$v.user.credentials.password.$model"
                    :hasError="$v.user.credentials.password.$error"
                    :validationMessages="['this field is requered','min length must be 4 char']" 
        >
        </base-input>




        <v-btn color="success" @click="submitForm(user)" :disabled="$v.$invalid">{{buttonText}}</v-btn>


  </div>
</template>

<script>
  import { required, minLength,email } from 'vuelidate/lib/validators'

  import BaseInput from './BaseComponents/BaseInput.vue'

  export default {
    name: 'UserAuthForm',
     props: {
     
       submitForm:  {type:Function,
                      required:true
                      },
       buttonText: {type:String,
                  default:'submit'},
      hasUserName: {
      type: Boolean,
      default: false
      },
    },

   data() {
      return {
        user: {
          username:'',
          credentials:{
          email: '',
          password: ''
          }
        },
      }
    },
    validations() {
        if(!this.hasUserName)
        return {
          user: {
          credentials:{
            email: {required,email},
            password: {required , minLength: minLength(4)}
          }
        },
        }
        return {
        user: {
          username:{required},
          credentials:{
            email: {required,email},
            password: {required , minLength: minLength(4)}
          }
        },
        }

    },
 

    components: {
      BaseInput,
    },
  }
</script>

<style lang="scss" scoped>
</style> 