<template>
  <main>
    <LoginForm />
  </main>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  bacskground: red;
}
</style>