<template>
  <div>
    <router-link to='./home'>home</router-link>
    <router-link to='./deepClone'>deepClone</router-link>
    <router-link to='./debounce'>防抖 节流</router-link>
    <router-link to='./component'>npm component</router-link>
    <router-link to='./uniqueSelect'>多个select共享数据， 值唯一，其他无法选择</router-link>
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
