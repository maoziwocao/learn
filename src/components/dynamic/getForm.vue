<template lang="pug">
div
  template(v-for="(item, index) in form")
    el-form-item(
      :key="item.key"
      :label="item.name"
      :rules="rulesMethod(item)"
      :prop="`${validator}.${index}.realValue`"
    )
      get-template(
        v-model="item.realValue"
        :item="item"
        :form="form"
      )
</template>


<script>
import getTemplate from './getComponent.vue';
import { componentType } from './const';

export default {
  name: 'GetFormItems',
  components: {
    getTemplate,
  },
  props: {
    validator: {
      type: String,
      default: '',
    },
    form: {
      type: [Object, Array],
      default: () => ({}),
    },
    recommendInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formCopy: null,
    };
  },
  mounted() {
  },
  methods: {
    isTriggerWithChange(item) {
      const types = [componentType.SELECT, componentType.CHECK_BOX, componentType.RADIO];
      return types.includes(item.componentType);
    },
    rulesMethod(item) {
      if (this.isTriggerWithChange(item)) {
        return [{ required: true, message: `请选择${item.name}` }];
      }
      return [{ required: true, message: `请输入${item.name}` }];
    },
  },
};
</script>
