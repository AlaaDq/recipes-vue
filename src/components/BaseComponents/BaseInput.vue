<template>
<div>
  <v-text-field
    v-model="model"
    :label="label"
    :type="type"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="slotName in Object.keys($slots)" :slot="slotName">
      <slot :name="slotName"></slot>
    </template>
    
  </v-text-field>
  <span v-if="hasError">
    <span v-for="(error,index) in validationMessages" :key="index" class="red--text">
        {{error}} <br>
    </span>
  </span>
</div>

</template>

<script>
export default {
      inheritAttrs:false,
  props: {
    type:{
      type: String,
      default: "text",
    },

    /**
     * input label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * input value
     */
    value: {
      type: String,
      default: "",
    },
    validationMessages:{
      type:Array,
      default: () =>["this field is requiered !!"]
    },
    hasError:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>