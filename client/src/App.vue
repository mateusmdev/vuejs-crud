<template>
  <header> 
    <Navbar />
  </header>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}

</script>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body{
    font-size: 1rem;
    background: #1b1c31;
    color: #fbfdfd;
    margin: 0 1em
  }

</style>
