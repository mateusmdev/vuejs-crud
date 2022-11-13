<template>
  <nav>
    <router-link to="/">Login</router-link> 
    <router-link to="/home">About</router-link>
  </nav>
</template>

<style scoped>
  nav{
    background: red;
    background: #26273b;
    margin: 0 -15px;
    width: calc(100% + 30px);
    padding: 1rem;
       margin-bottom: 1rem;
  }

  nav a{
    color: #aebbc4;
    margin-right: 15px;
    display: inline-block;
    text-decoration: none;
  }
</style>