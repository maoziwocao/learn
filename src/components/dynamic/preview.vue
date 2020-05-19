<template lang="pug">
div
 el-form(label-width="110px" ref="form" :model="value")
   get-form(:validator="'asset'" :form="value.asset")
</template>
<script>
import getForm from './getForm.vue';

export default {
  components: {
    getForm,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
    };
  },
  methods: {
    validate() {
      return new Promise((resolve) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            resolve(true);
          }
          resolve(false);
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.drag-wapper {
  display: flex;
  flex-wrap:wrap
}
</style>
