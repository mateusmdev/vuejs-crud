<template>
  <nav>
    <router-link to="/home" v-on:click="logout">Logout</router-link>
  </nav>
</template>

<script>

export default {
  methods: {
    logout(){
      localStorage.setItem("token-dashboard", '')
    this.$router.push("/");
    }
  }
}
</script>

<style scoped>
nav {
  background: #26273b;
  margin: 0 -15px;
  width: calc(100% + 30px);
  padding: 1rem;
  margin-bottom: 1rem;
  z-index: 20;
}

nav a {
  color: #aebbc4;
  margin-right: 15px;
  display: inline-block;
  text-decoration: none;
}
</style>