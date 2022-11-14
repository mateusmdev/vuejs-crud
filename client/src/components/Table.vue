<template>
  <div class="table">
    <Row :json="columnName" :btnDisplay="false"/>
    <Row
      v-for="item in items"
      :key="item.id"
      :json="item"
      :toggle="toggle"
      :update="update"
      :btnDisplay="true"
    />
  </div>
</template>


<script>
import Row from "./Row.vue";

export default {
  components: {
    Row,
  },
  props: {
    items: Array,
    toggle: Function,
    update: Function,
  },
  data() {
    return {
      columnName: {
        name: 'Nome',
        age: 'Idade',
        genre: 'Sexo',
        zip_code: 'CEP',
        state: 'Estado',
        district: 'Bairro',
        city: 'Cidade',
        street: 'Rua',
        father_name: 'Nome do Pai',
        mother_name: 'Nome da Mãe'
        
      },
    };
  },
};
</script>

<style scoped>
.table {
  overflow: auto;
  padding-bottom: 1rem;
}
</style>