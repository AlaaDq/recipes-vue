<template>
    <div>
      <v-file-input
        v-model="files"
        color="deep-purple accent-4"
        counter
        label="File input"
        multiple
        placeholder="Select your files"
        prepend-icon="mdi-paperclip"
        outlined
        :show-size="1000"
        :loading="this.progress.percent <100 && this.progress.percent > 0"
        @change="handelvue"
        @click:clear="paraentFilesClear"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip
            v-if="index < 2"
            color="deep-purple accent-4"
            dark
            label
            small
          >
            {{ text }}
          </v-chip>

          <span
            v-else-if="index === 2"
            class="overline grey--text text--darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>

    </div>
</template>

<script>

    export default {
        mounted(){
        },
        data(){
            return {
            files: [],
            }
        },
        methods:{
            paraentFilesClear(){
                this.$emit('clear-files');
            },

            handelvue() {

                let length= this.files.length
                if(! length) return

                this.files.forEach(file => {
                    const fr = new FileReader ()
                    fr.readAsDataURL(file)
                })

                this.$emit('files-loaded',{ files: this.files })
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>