<template>
  <div class="modal-container">
    <div class="modal">
      <div class="close" v-on:click="toggle">X</div>

      <div class="clear"></div>
      <form action="#" v-on:submit="submit" method="post">
        <div>
          <label for="">Nome</label>
          <input v-model="name" type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="">Idade</label>
          <input
            type="number"
            id="name"
            name="name"
            min="18"
            placeholder="18"
            required
            v-model="age"
          />
        </div>
        <div>
          <div class="radio">
            <label for="male"
              >Masculino: <input type="radio" name="genre" id="male" checked value="male" v-model="genre"/>
            </label>
            <label for="female">
              Feminino: <input type="radio" name="genre" id="female" value="female" v-model="genre"/>
            </label>
          </div>
        </div>
        <div>
          <label for="cep">CEP</label>
          <input
            type="text"
            name="cep"
            id=""
            v-model="cep"
            v-on:change="getCep"
            required
          />
        </div>
        <div>
          <label for="state">Estado</label>

          <input type="text" v-model="state" id="state" required />
        </div>
        <div>
          <label for="">Cidade</label>
          <input type="text" v-model="city" required />
        </div>
        <div>
          <label for="">Bairro</label>
          <input type="text" v-model="district" required />
        </div>
        <div>
          <label for="">Rua</label>
          <input type="text" v-model="street" required />
        </div>
        <div>
          <label for="">Pai</label>
          <input type="text" v-model="father" />
        </div>
        <div>
          <label for="">Mãe</label>
          <input type="text" v-model="mother" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
import server from "../services/server";

export default {
  name: "Modal",
  data() {
    return {
      dataAdress: {},
      id: this.$props.data.id || null,
      cep: this.$props.data.zip_code || "",
      name: this.$props.data.name || "",
      age: this.$props.data.age || "",
      genre: this.$props.data.genre || "male",
      state: this.$props.data.state || "",
      city: this.$props.data.city || "",
      district: this.$props.data.district || "",
      street: this.$props.data.street || "",
      father: this.$props.data.father_name || "",
      mother: this.$props.data.mother_name || "",
    };
  },
  props: {
    toggle: Function,
    users: Array,
    data: Object,
    update: Function
  },
  methods: {
    async getCep() {
      try {
        const url = `/ws/${this.cep}/json/`;
        const response = await api.get(url);
        this.dataAdress = response.data;

        this.state = this.dataAdress.uf;
        this.city = this.dataAdress.localidade;
        this.district = this.dataAdress.bairro;
        this.street = this.dataAdress.logradouro;


        if (this.dataAdress.erro) throw new Error("");
      } catch (error) {
        alert("CEP invalido ou não foi possível verificar");
      }
    },

    async submit(e) {
      e.preventDefault();
      console.log(this.genre)
      let body = {
        name: this.name,
        age: this.age,
        genre: (this.genre === 'male') ? true : false,
        zip_code: this.cep,
        state: this.state,
        city: this.city,
        district: this.district,
        street: this.street,
        father_name: this.father,
        mother_name: this.mother,
        user_id: 1,
      };

      try {
        let url = "";
        let response = null;

        if (this.id !== null) {
          url = `/client/`;

          body = {
            id: this.id,
            ...body,
          };

          response = await server.put(url, body);

          if (response.data.status === 201) {
            const response = await server.get("/client/");
            this.$props.users = []
            this.$props.update()
            alert(`Cliente atualizado com sucesso!`);
          }
        } else {
          url = `/client/`;
          response = await server.post(url, body);
          this.$props.users.push(response.data.created);
          alert(`Cliente cadastrado com sucesso!`);
        }

        this.$props.toggle();
      } catch (error) {
        alert("Ocorreu um erro e não foi possível cadastrar um novo cliente");
      }
    },
  },
};
</script>


<style scoped>
.modal-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  background: #26273b;
  max-width: 50%;
  width: 100%;
  min-width: 420px;
  height: 370px;
  padding: 1rem;
}
.close {
  margin-bottom: 0.5rem;
  cursor: pointer;
  float: right;
}
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
input[type="radio"],
.radio {
  margin-right: 1rem;
}

form > div {
  display: flex;
  justify-content: space-between;
  bacskground: red;
}
button {
  grid-column-start: 1;
  grid-column-end: 3;
  width: 300px;
  margin: auto;
  margin-top: 1rem;
}
input[type="text"],
input[type="number"],
input[type="password"],
select,
option {
  width: 80%;
}
</style>