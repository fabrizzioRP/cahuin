<template>
  <nav class="links">
    <CustomLink v-for="link in allLinks" :key="link.to" :link="link" />
  </nav>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "CustomNavBar",
  components: {
    CustomLink: defineAsyncComponent(() => import(/* webpackChunkName: "CustomLink" */ "./CustomLink.vue")),
  },
  props: {
    links: {
      type: Array,
      required: true,
      default: [],
    },
  },
  created() {
    this.links.map(({ to, name }) =>
      this.allLinks.unshift({ to, name }));
  },
  data() {
    return {
      allLinks: [
        { to: 'login', name: 'Log out' },
      ],
    };
  },
}
</script>

<style scoped>
.links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
}
</style>