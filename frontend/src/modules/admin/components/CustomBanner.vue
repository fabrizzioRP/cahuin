<template>
  <div v-if="typeMsg === 'success'" class="alert alert-success d-flex align-items-center" role="alert">
    <div>{{ msg }}</div>
  </div>
  <div v-if="typeMsg === 'error'" class="alert alert-danger d-flex align-items-center" role="alert">
    <div>{{ msg }}</div>
  </div>
  <div v-if="typeMsg === 'info'" class="alert alert-warning d-flex align-items-center" role="alert">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "CustomBanner",
  props: {
    msg: {
      type: String,
      required: true,
    },
    typeMsg: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.alert {
  margin-bottom: 0;
}
</style>