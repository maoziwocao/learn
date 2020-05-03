<template>
  <div>
    <router-link to='./home'>home</router-link>
    <router-link to='./deepClone'>deepClone</router-link>
    <router-link to='./debounce'>防抖 节流</router-link>
    {{num}}
  </div>
</template>

<script>
import add from 'vuepressyaow';

export default {
  data() {
    return {
      num: add(1, 2),
    };
  },
};
</script>


<style lang="less" scoped>
div > a {
  display: inline-block;
  padding: 5px 20px;
}
</style>
