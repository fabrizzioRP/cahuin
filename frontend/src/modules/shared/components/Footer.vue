<template>
  <footer>
    <p>Copyright &copy; {{ year }} Logaritmo - Tecnologías de información. Todos los derechos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #252525;
  color: white;
  display: flex;
  justify-content: center;
  padding: 20px 3rem;
}

footer a {
  color: red;
  font-weight: bold;
}

footer p {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
</style>