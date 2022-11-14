<template>
  <div class="form-container">
    <h1>Please, sign in to access dashboard</h1>
    <form action="#">
      <div>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="email">Password:</label>
        <input type="password" name="password" id="" v-model="password" />
      </div>
      <button type="submit" v-on:click="login">Logar</button>
      <div class="clear"></div>
    </form>
  </div>
</template>

<script>
import server from "../services/server";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      try {
        e.preventDefault();

        const body = {
          email: this.email,
          password: this.password,
        };

        const response = await server.post("/user/authentication", body);
        const token = response.data.token;
        localStorage.setItem("token-dashboard", token);
        this.$router.push("/home");
      } catch (error) {
        if (error.response.data.status === 401)
          alert("Usuário não autenticado!");
        else
          alert("Ocorreu um erro e não foi possível se conectar ao servidor");
      }
    },
    async getSession() {
      try {
        const token = localStorage.getItem("token-dashboard") || "";
        const auth = "Bearer ".concat(token);

        const response = await server.get("http://localhost:3000/user", {
          headers: {
            Authorization: auth
          }
        });
        if (response.data.status === 200) this.$router.push("/home");
      } catch (error) {}
    },
  },
  async mounted() {
    await this.getSession()
  }
};
</script>

<style scoped>
.form-container {
}
h1 {
  font-size: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}
form {
  bordesr: 1px solid red;
  border-radius: 3px;
  width: 400px;
  padding: 1rem;
  background: #26273b;
}
form > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>