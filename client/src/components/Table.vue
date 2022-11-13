<template>
  <div class="table">
      <Row />
   
  </div>
</template>


<script>
import Row from './Row.vue'

export default {
  components: {
    Row
  }
}

</script>

<style scoped>
.table {
  bordesr: 1px solid red;
  overflow: auto;
  padding-bottom: 1rem;
}


</style>