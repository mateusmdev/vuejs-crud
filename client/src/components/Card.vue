<template>
  <div class="card">
    <div class="data">
      <span>{{ title }}</span>
      <div>{{ count }}</div>
    </div>
    <div>
      <i :class="icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    count: Number,
    icon: String,
  },
};
</script>

<style scoped>
.card {
  background: #26273b;
  width: 100%;
  height: 140px;
  margin: 20px auto;
  color: #aebbc4;
  padding: 0.9em;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.card i{
    font-size: 4.8rem;
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.card > div{
    font-size: 1.9em;
}
.card > div div{
    margin-top: 10px;
    margin-left: 40px;
}
</style>