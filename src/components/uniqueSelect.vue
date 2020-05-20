<template lang="pug">
div
  p 思路是把所选的value放到一个数组中, 然后options中做判断
  el-row(style="width: 1224px")
    el-col(:span="10")
      el-select(v-model="value1" clearable)
        el-option(
          v-for="v in options"
          :key="v.value" :value="v.value" :label="v.label"
          :disabled="[value1, value2].includes(v.value) && value1 !== v.value"
        )
      p value: {{getName(value1)}}
    el-col(:span="10" :offset="2")
      el-select(v-model="value2" clearable)
        el-option(
          v-for="v in options"
          :key="v.value" :value="v.value" :label="v.label"
          :disabled="[value1, value2].includes(v.value) && value2 !== v.value"
        )
      p value: {{getName(value2)}}
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: '1', label: '黄金糕' },
        { value: '2', label: '双皮奶' },
        { value: '3', label: '蚵仔煎' },
        { value: '4', label: '龙须面' },
        { value: '5', label: '北京烤鸭' },
      ],
      value1: '',
      value2: '',
      choosedIds: [],
    };
  },
  methods: {
    getName(v) {
      const obj = this.options.find(e => e.value === v) || {};
      return obj.label || '';
    },
  },
};
</script>

<style>

</style>
