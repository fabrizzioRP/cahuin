<template>
  <Header :links="adminLinks" />
  <router-view></router-view>
  <Footer />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Header: defineAsyncComponent(() => import(/* webpackChunkName: "Header" */ "../../shared/components/Header.vue")),
    Footer: defineAsyncComponent(() => import(/* webpackChunkName: "Footer" */ "../../shared/components/Footer.vue")),
  },
  data() {
    return {
      adminLinks: [
        { to: 'admin-proveedores', name: 'Proveedores' },
        { to: 'admin-clientes', name: 'Clientes' },
        { to: 'admin-dashboard', name: 'Dashboard' },
      ],
    };
  },
}
</script>