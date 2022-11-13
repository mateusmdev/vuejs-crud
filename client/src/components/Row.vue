<template>
  <div class="row">
    <div class="id">1</div>
    <div class="name">Alguem</div>
    <div class="age">20</div>
    <div class="genre">Male</div>
    <div class="zip-code">xxxxx-xxx</div>
    <div class="state">São Paulo</div>
    <div class="city">Sao paulo</div>
    <div class="district">fdsfdsfds</div>
    <div class="street">fdsfadsfdsfds</div>
    <div class="father-name">fdsafsdfdsa dsfads</div>
    <div class="mother-name">dfds dsfasdfsd</div>
    <div class="btn">
      <div class="edit">
        <img src="../assets/edit.svg" alt="" />
      </div>
      <div class="delete">
        <img src="../assets/delete.svg" alt="" />
      </div>
    </div>
  </div>
</template>

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
  grid-column-end: 32;
}
.row .father-name {
  grid-column-start: 32;
  grid-column-end: 37;
}
.row .mother-name {
  grid-column-start: 37;
  grid-column-end: 43;
}
.row .btn {
  grid-column-start: 43;
  grid-column-end: 46;
  display: flex;
  justify-content: space-around;
}
.row .btn .edit,
.row .btn .delete {
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: #aebbc4;
  padding: 2px;
}
.row .btn img {
  width: 100%;
  height: 100%;
}
</style>