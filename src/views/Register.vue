<template>
  <v-container>
    <h1>register</h1>
    <user-auth-form buttonText="register" :hasUserName="true" :submitForm="register" >
    </user-auth-form>
  </v-container>
</template>

<script>

  import UserAuthForm from  "@/components/UserAuthForm"

  export default {
    components:{
      UserAuthForm
    },
    methods:{
        register(user){
          console.log(user)
            this.$store.dispatch("register",user).then((res)=>{
                    console.log(res)
            }).catch((e)=>{console.log(e)});
        }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>