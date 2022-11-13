<template>
  <!-- TODO: BANNER EN CASO CREDENCIALES ERRONEAS -->
  <CustomBanner v-if="isWrongCreds" msg="Something went wrong, Try Again" typeMsg="error" />

  <div class="container">
    <div class="box-login">

      <h1>Sign Up Here</h1>

      <form v-on:submit="submitForm">
        <label for="accountcode">Account Code</label>
        <input type="text" placeholder="j1jsj12n" v-model="accountcode" required>
        <br>
        <label for="username">Username</label>
        <input type="text" placeholder="Username" v-model="username" required>
        <br>
        <label for="password">Password</label>
        <input type="password" placeholder="********" v-model="password" required>
        <br>
        <p><strong>{{ warnPass }}</strong></p>

        <input type="submit" value="Sign Up" class="btn-submit">
      </form>

      <p>&copy; Cahuin {{ year }} | Powered by <a target="_blank" href="https://www.logaritmo.cl/">Logaritmo</a> </p>

    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import backend from "../../../api/axios_config";
export default {
  name: "SignUp",
  components: {
    CustomBanner: defineAsyncComponent(() => import(/* webpackChunkName: "CustomBanner" */ "../../admin/components/CustomBanner")),
  },
  data() {
    return {
      accountcode: "",
      username: "",
      password: "",
      year: new Date().getFullYear(),
      isWrongCreds: false,
      warnPass: "",
    }
  },
  watch: {
    password(nuevo, _) {
      this.warnPass = nuevo.length < 8 || nuevo.length > 10 ? "Invalid character numbers" : "";
    }
  },
  methods: {
    async submitForm(e) {
      e.preventDefault();

      const data = {
        accountcode: this.accountcode,
        username: this.username,
        password: this.password,
      };

      try {
        const resp = await backend.post("/auth/signup", data, {
          headers: "Content-Type: application/json",
        });

        if (resp.data.success === "true") {
          this.$router.push({ name: "login" });
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        this.isWrongCreds = true;
        setTimeout(() => this.isWrongCreds = false, 2000);
      }
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.box-login {
  backdrop-filter: blur(10px);
  background-color: rgb(12 10 10 / 56%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  margin: 0 auto;
  transition: .6s ease-in-out;
  width: 400px;
  height: 550px;
}

.box-login:hover {
  border: #1ab394 2px solid;
  transition: .6s ease-in-out;
  width: 420px;
}

h1 {
  color: white;
  margin: 0;
  padding: 0;
}

label {
  color: white;
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto;
  width: 70%;
  letter-spacing: 0.5px;
}

input {
  outline: none;
  border: none;
  border-radius: 8px;
  border: none;
  display: block;
  height: 30px;
  margin: 0 auto;
  padding: 0 10px;
  width: 70%;
  letter-spacing: 0.5px;
}

.btn-submit {
  letter-spacing: 0.5px;
  background-color: transparent;
  border: none;
  margin-top: 40px;
  font-weight: bold;
  font-size: 18px;
  transition: .4s ease-in-out;
  width: 200px;
  height: 40px;
  color: white;
  border: 1px #1ab394 solid;
}

.btn-submit:hover {
  transition: .4s ease-in-out;
  background-color: #1ab394;
  color: white;
  border: none;
}

p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: white;
}

a {
  color: #1ab394;
  font-weight: bold;
}
</style>
