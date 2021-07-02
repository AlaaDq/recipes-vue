<template>
 <v-container
      class="grey lighten-5 mb-6"
    >

    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
      <v-row >

      
        <v-col v-for="(recipe,index) in testing " :key="index"
        cols="12" sm="6" md="4" 
        >

        <slot :recipe="recipe"></slot>


        </v-col>
      </v-row>
        </v-col>
      </v-row>
 </v-container>
</template>

<script>
import {  mapGetters } from "vuex";

  export default {
    name:"GridList",
    props:{
        action:{
            type:String,
            required:true
        },
        getter:{
            type:String,
            required:true
        },
    },
    mounted(){
        console.log(this.action,this.getter)
     this.$store.dispatch(this.action).
     then((response)=>{

     });
    },   
    
     computed:{
         testing:{
             get(){
                 return this.$store.getters[this.getter];
             }
         }

    //   ...mapGetters([this.getter]),
    }

  }
</script>

<style lang="scss" scoped>

</style>