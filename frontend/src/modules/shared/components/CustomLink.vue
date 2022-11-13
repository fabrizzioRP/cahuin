<template>

  <a v-if="isExternalLink" target="_blank" :href="link.to" :class="'normal-link'">{{ link.name }}</a>

  <router-link v-else :to="route" v-slot="{ isActive }">
    <a :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
  </router-link>

</template>

<script>
import backend from "../../../api/axios_config";
export default {
  name: "CustomLink",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
    route() {
      return { name: this.link.to };
    }
  },
}
</script>

<style scoped>
.is-active {
  color: #1ab394;
}

.normal-link {
  color: white;
}

a {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: center;
  text-decoration: none;
  transition: .2s ease-in-out;
}

a:hover {
  /* color: rgb(217, 108, 35); */
  color: #1ab394;
  transition: .2s ease-in-out;
}
</style>