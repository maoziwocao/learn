<template lang="pug">
  div
    router-link(to='./home') home
    router-link(to='./deepClone') deepClone
    router-link(to='./debounce') 防抖 节流
    el-tooltip(
      content="vue cli3 打包组件为一个npm包给别的项目使用"
      placement="bottom"
    )
      router-link(to='./component') npm component
    el-tooltip(
      content="多个select共享数据, 值唯一，其中一个选择后其他select无法选择"
      placement="bottom"
    )
      router-link(to='./uniqueSelect') uniqueSelect
    router-link(to='./baseInput') baseInput(sync修饰符)
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
