<template>
  <div>
    <div>
      <h1>Usuário</h1>
      <i>Gerenciamento de Usuário</i>
      <ButtonAdd />
    </div>
    <main>
      <div class="card-container">
        <Card title="Usuários" count="1" icon="fa-solid fa-users" />
        <Card title="Admin" count="1" icon="fa-solid fa-user" />
      </div>

      <div class="content">
        <div class="table-content">
          <h2>Lista de Usuários</h2>
          <Table/>
        </div>

        <div class="user-container">
          <h2>Novo Usuário</h2>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Table from "../components/Table.vue";
import ButtonAdd from "../components/ButtonAdd.vue";

export default {
  components: {
    Card,
    Table,
    ButtonAdd
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  backgrsdound: red;
}
</style>


