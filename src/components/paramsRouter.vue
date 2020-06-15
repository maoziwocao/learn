<template lang="pug">
  div
    p page: {{page}}
    p id: {{id}}
</template>

<script>
export default {
  props: ['page', 'id'],
};
</script>
