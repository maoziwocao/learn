<template lang="pug">
.warpper
  el-color-picker(
    v-if="item.componentType === componentType.COLOR_PICKER"
    v-model="newVal"
    :show-alpha="item.limit.showAlpha"
  )
</template>

<script>
import { componentType } from './const';

export default {
  components: {
  },
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: null,
    },
    item: {
      type: Object,
      default: () => ({}),
    },
    getMethod: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      componentType,
      newVal: this.setMultiPlyValuesDefault(),
      notInput: !this.isInput(this.item),
    };
  },
  watch: {
    value(val) {
      this.newVal = val;
      // if (val) {
      // }
    },
    newVal() {
      if (this.notInput) {
        this.$emit('input', this.newVal);
      }
    },
  },
  methods: {
    setMultiPlyValuesDefault() {
      if (this.isMultiValues(this.item)) {
        if (this.item.realValue && Array.isArray(this.item.realValue)) {
          return this.value;
        }
        return [];
      }
      return this.value;
    },
    handleChange() {
      if (!this.notInput) {
        this.$emit('input', this.newVal);
      }
    },
    isMultiValues(item) {
      const types = [componentType.CHECK_BOX];
      return types.includes(item.componentType);
    },
    isInput(item) {
      const types = [componentType.INPUT];
      return types.includes(item.componentType);
    },
  },
};
</script>
