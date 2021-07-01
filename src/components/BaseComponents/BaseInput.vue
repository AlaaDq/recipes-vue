<template>
  <v-text-field
    v-model="model"
    :label="label"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="slotName in Object.keys($slots)" :slot="slotName">
      <slot :name="slotName"></slot>
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: {
    /** state props */
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