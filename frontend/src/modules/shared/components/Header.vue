<template>
  <header>

    <div class="Logo">
      <h1>Cahuin</h1>
    </div>

    <CustomNavBar :links="links" />

  </header>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: "Header",
  components: {
    CustomNavBar: defineAsyncComponent(() => import(/* webpackChunkName: "CustomNavBar" */ "./CustomNavBar.vue")),
  },
  props: {
    links: {
      type: Array,
      required: true,
      default: [],
    },
  },
}
</script>

<style scoped>
header {
  background-color: #252525;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
}

.Logo h1 {
  padding: 20px 0;
  color: white;
}
</style>