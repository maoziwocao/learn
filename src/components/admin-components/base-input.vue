<template lang="pug">
  .container
    input(v-model="innerText" @input="handleInput")
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      innerText: '',
    };
  },
  watch: {
    text() {
      this.innerText = this.text;
    },
  },
  methods: {
    handleInput() {
      this.$emit('input', this.innerText);
    },
  },
};
</script>
