<template>
  <div>
        <base-input :label="name"></base-input>
        <base-input :label="description"></base-input>
        <file-upload v-on:files-loaded="recive($event)" v-on:clear-files="onClearFiles">
          
        </file-upload>

  </div>
</template>

<script>
  import BaseFileUpload from '../components/BaseComponents/BaseFileUpload.vue'
  import BaseInput from '../components/BaseComponents/BaseInput.vue'

  export default {
    name: 'Home',
   data() {
      return {
        valid: false,
        showPassword: false,
        // hasName: false,
        userInfo: {
          email: '',
          password: ''
        },
        ...validations
      }
    },

    components: {
      BaseFileUpload,
      BaseInput,
    },
  }
</script>






<template>
  <v-form v-model="valid">
    <v-text-field v-model="userInfo.name" 
                  label="Name" 
                  :rules="[required('name')]"
                  v-if="hasName" />

    <v-text-field v-model="userInfo.email" 
                  label="Email" 
                  :rules="[required('email'), emailFormat()]"/>

    <v-text-field v-model="userInfo.password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'" 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('password'), minLength('password', 8)]"
                  />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
  import validations from "@/utils/validations";
  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        // hasName: false,
        userInfo: {
          email: '',
          password: ''
        },
        ...validations
      }
    },
    // props: ["submitForm", "buttonText", "hasName"]
    props: {
         submitForm: Function,
    buttonText: [String],
    hasName: {
      type: Boolean,
      required: false
    },
    }



  }
</script>

<style lang="scss" scoped>
</style> 