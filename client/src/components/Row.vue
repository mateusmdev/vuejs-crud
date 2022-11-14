<template>
  <div class="row">
    <div class="id">{{ this.$props.json.id }}</div>
    <div class="name">{{ this.$props.json.name }}</div>
    <div class="age">{{ this.$props.json.age }}</div>
    <div class="genre">{{ this.$props.json.genre ? "Masculino" : "Feminino" }}</div>
    <div class="zip-code">{{ this.$props.json.zip_code }}</div>
    <div class="state">{{ this.$props.json.state }}</div>
    <div class="city">{{ this.$props.json.city }}</div>
    <div class="district">{{ this.$props.json.district }}</div>
    <div class="street">{{ this.$props.json.street }}</div>
    <div class="father-name">{{ this.$props.json.father_name }}</div>
    <div class="mother-name">{{ this.$props.json.mother_name }}</div>
    <div class="btn" v-if="btnDisplay">
      <div class="edit" v-on:click="toggle(this.$props.json)">
        <img src="../assets/edit.svg" alt="" />
      </div>
      <div class="delete" v-on:click="deleteRow">
        <img src="../assets/delete.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import server from "../services/server";

export default {
  props: {
    json: Object,
    toggle: Function,
    update: Function,
    btnDisplay: Boolean
  },
  methods: {
    async deleteRow(){
      try {
        const response = await server.delete(`/client/${this.$props.json.id}`)
        alert('Cliente deletado')
        this.$props.update()
      } catch (error) {
        alert('Não foi possível deletar o cliente')
      }
    }
  },
};
</script>

<style scoped>
.row {
  borsder: 1px solid greenyellow;
  background: #26273b;
  display: grid;
  grid-template-columns: repeat(auto-fill, 29.45px);
  width: 1328px;
  margin-top: 5px;
  border-radius: 3px;
}
.row > div {
  bosrder: 1px solid blue;
  line-height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
}
.row .name {
  grid-column-start: 2;
  grid-column-end: 7;
}
.row .age {
  grid-column-start: 7;
  grid-column-end: 9;
}
.row .genre {
  grid-column-start: 9;
  grid-column-end: 11;
}
.row .zip-code {
  grid-column-start: 11;
  grid-column-end: 15;
}
.row .state {
  grid-column-start: 15;
  grid-column-end: 19;
}
.row .city {
  grid-column-start: 19;
  grid-column-end: 23;
}
.row .district {
  grid-column-start: 23;
  grid-column-end: 27;
}
.row .street {
  grid-column-start: 27;
  grid-column-end: 34;
}
.row .father-name {
  grid-column-start: 34;
  grid-column-end: 39;
}
.row .mother-name {
  grid-column-start: 39;
  grid-column-end: 44;
}
.row .btn {
  grid-column-start: 44;
  grid-column-end: 46;
  display: flex;
  justify-content: space-around;
}
.row .btn .edit,
.row .btn .delete {
  width: 25px;
  height: 25px;
  cursor: pointer;
  padding: 2px;
}
.row .btn img {
  width: 100%;
  height: 100%;
  filter: invert(70%);
}
</style>