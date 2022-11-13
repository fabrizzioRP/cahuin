<template>
  <Header />
  <h1>Cliente</h1>
  <router-view></router-view>
  <Footer />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Header: defineAsyncComponent(() => import(/* webpackChunkName: "Header" */ "../../shared/components/Header.vue")),
    Footer: defineAsyncComponent(() => import(/* webpackChunkName: "Footer" */ "../../shared/components/Footer.vue")),
  }
}
</script>