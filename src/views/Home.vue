[<template>
  <div>
    home
  </div>
</template>

<script>
import {  mapGetters } from "vuex";

  export default {
    name:"Home",
    
    mounted(){
     this.$store.dispatch("getAllRecipes").
     then((response)=>{
       console.log('adf')
     });
    },   
    
     computed:{
      ...mapGetters(["recipes"]),
    }

  }
</script>

<style lang="scss" scoped>

</style>]