<template>
  <div>
    <base-input
      :label="'name'"
      v-model="$v.recipe.name.$model"
      :hasError="$v.recipe.name.$error"
    >
    </base-input>
    <base-input
      :label="'description'"
      v-model="$v.recipe.description.$model"
      :hasError="$v.recipe.description.$error"
    >
    </base-input>

    <base-file-upload
      v-if="!isEditForm"
      :label="'recipe image'"
      v-on:files-loaded="recive($event)"
      v-on:clear-files="onClearFiles()"
    >
    </base-file-upload>

    <!-- edit form -->
    <template v-else>
      <v-img :aspect-ratio="16 / 9" :width="300" :src="recipe.image"></v-img>

      <v-checkbox
        v-model="recipe.updateImageFlag"
        :label="`Do you want to change old recipe image ?`"
      ></v-checkbox>
      <base-file-upload
        v-if="recipe.updateImageFlag"
        :label="'recipe image'"
        v-on:files-loaded="recive($event)"
        v-on:clear-files="onClearFiles()"
      >
      </base-file-upload>
    </template>
    <v-btn
      color="success"
      @click="submitForm(recipe)"
      :disabled="$v.$invalid"
      >{{ buttonText }}</v-btn
    >
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import BaseInput from "./BaseComponents/BaseInput.vue";
import BaseFileUpload from "./BaseComponents/BaseFileUpload.vue";

export default {
  name: "RecipeForm",
  props: {
    isEditForm: {
      type: Boolean,
      default: false,
    },
    submitForm: {
      type: Function,
      required: true,
    },
    buttonText: {
      type: String,
      default: "submit",
    },
  },

  mounted() {
    if (this.isEditForm) {
      this.$axios.get(`recipes/${this.$route.params.name}`).then((response) => {
        // this.recipe=response.data
      });
      this.recipe = this.$store.getters["recipeByName"](
        this.$route.params.name
      );
    }
  },

  data() {
    return {
      recipe: {
        name: "",
        description: "",
        files: [],
        updateImageFlag: false,
      },
    };
  },
  validations() {
    if (!this.isEditForm)
      return {
        recipe: {
          name: { required },
          description: { required },
          files: { required },
        },
      };
    else
      return {
        recipe: {
          name: { required },
          description: { required },
          //  files optinals
        },
      };
  },

  methods: {
    recive(e) {
      this.recipe.files = e.files;
    },
    onClearFiles() {
      this.recipe.files = [];
    },
  },
  components: {
    BaseInput,
    BaseFileUpload,
  },
};
</script>

<style lang="scss" scoped>
</style> 