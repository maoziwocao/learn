<template>
  <div>
    原始数据 {{infos}}
    <ul>
      <li>1. 正则会被stringify为空值</li>
      <li>2. function会被stringify为空值</li>
      <li>3. date对象被转换成字符串</li>
      stringify: {{stringifyInfos}}
    </ul>
    <p>真正的深拷贝需要判断对象的种类（promise，Date，map, set, reg）等</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: {
        fns: {
          fn1() {
            console.log();
          },
          times: {
            updateTime: new Date(),
          },
        },
        text: 123,
      },
      stringifyInfos: '',
    };
  },
  methods: {
    stringifyClone() {
      this.stringifyInfos = JSON.parse(JSON.stringify(this.infos));
    },
  },
  mounted() {
    this.stringifyClone();
  },
};
</script>
