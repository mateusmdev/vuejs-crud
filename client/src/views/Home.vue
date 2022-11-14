<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div>
      <div>
        <h1>Usuário</h1>
        <i>Gerenciamento de Usuário</i>
        <ButtonAdd :toggle="toggleModal" />
      </div>
      <main>
        <div class="card-container">
          <Card
            title="Usuários"
            :count="users.length"
            icon="fa-solid fa-users"
          />
          <Card title="Admin" :count="1" icon="fa-solid fa-user" />
        </div>

        <div class="content">
          <div class="table-content">
            <h2>Lista de Usuários</h2>
            <Table
              :items="users || []"
              :toggle="toggleModal"
              :update="getData"
            />
          </div>
        </div>
        <Modal
          v-if="activated"
          :toggle="toggleModal"
          :users="users"
          :data="data || {}"
          :update="getData"
        />
      </main>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Table from "../components/Table.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import Modal from "../components/Modal.vue";
import Navbar from "../components/Navbar.vue";
import server from "../services/server";

export default {
  components: {
    Card,
    Table,
    ButtonAdd,
    Modal,
    Navbar,
  },
  data() {
    return {
      activated: false,
      users: [],
      data: null,
    };
  },
  methods: {
    toggleModal(data) {
      this.activated = !this.activated;
      this.data = data;
    },
    async getData() {
      try {
        const response = await server.get("/client/");
        this.users = response.data.objects;
      } catch (error) {
        alert("Não foi possível se conectar com o banco de dados");
      }
    },
    async getSession() {
      try {
        const token = localStorage.getItem("token-dashboard") || "";
        const auth = "Bearer ".concat(token);

        const response = await server.get("http://localhost:3000/user", {
          headers: {
            Authorization: auth,
          },
        });
      } catch (error) {
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    await this.getSession();
    await this.getData();
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

@media (max-width: 560px) {
  .card-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>


