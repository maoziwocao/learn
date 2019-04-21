<template>
  <div>
    <input type="text" v-model="text" @input="inping">
    <p>0.5秒后更新 text = {{textCopy}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      textCopy: '',
      timeout: null,
      throttleTimeout: null,
    };
  },
  methods: {
    inping() {
      this.debounce(() => {
        console.log(this.text);
        this.textCopy = this.text;
      });
    },
    // 连续触发只会是最后一次触发的0.5秒后执行一次
    debounce(fn, time = 500) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        fn();
      }, time);
    },
    // 连续触发时每隔0.5秒执行一次
    throttle(fn, time = 500) {
      if (!this.throttleTimeout) {
        this.throttleTimeout = setTimeout(() => {
          this.throttleTimeout = null;
          fn();
        }, time);
      }
    },
  },
};
</script>
