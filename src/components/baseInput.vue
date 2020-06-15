<template lang="pug">
  .container
    baseInput(v-model="v")
    div v = {{v}}
</template>

<script>
import baseInput from './admin-components/base-input.vue';

export default {
  name: 'baseInputTest',
  components: {
    baseInput,
  },
  data() {
    return {
      v: '',
    };
  },
};
</script>
