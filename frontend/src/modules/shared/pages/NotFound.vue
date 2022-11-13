<template>
  <div class="notfound">
    <h1>404, page not found. <span class="handle"></span></h1>
    <br>
    <router-link :to="{ name: 'login' }">Home</router-link>
  </div>
</template>

<script>

setInterval(() => {
  document.querySelector("span").classList.remove("handle");
}, 1500);

setInterval(() => {
  document.querySelector("span").classList.add("handle");
}, 1700);

</script>

<style scoped>
.notfound {
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.handle {
  background: #ffe500;
  width: 14px;
  height: 30px;
  margin-top: 1px;
  position: absolute;
}

a {
  margin: 0 auto;
  color: white;
  font-weight: bold;
}
</style>