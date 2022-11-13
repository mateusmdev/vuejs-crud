<template>
  <div class="form-container">
    <h1>Please, sign in to access dashboard</h1>
    <form action="#">
      <div>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label for="email">Password:</label>
        <input type="password" name="password" id="" />
      </div>
      <button type="submit">Logar</button>
      <div class="clear"></div>
    </form>
    
  </div>
</template>

<style scoped>
.form-container {
  
}
h1 {
  font-size: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}
form {
  bordesr: 1px solid red;
  border-radius: 3px;
  width: 400px;
  padding: 1rem;
  background: #26273b;
}
form input{
    width: 250px;
    border: none;
    outline: none;
    background: #1b1c31;
    color: #aebbc4;
    padding: 8px 12px;
    border-radius: 4px;
}
form > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
button {
    outline: none;
    border: none;
    padding: 5px 20px;
    background: #1b1c31;
    color: #aebbc4;
    border-radius: 3px;
    float: right;
    margin-bottom: -20px;
    cursor: pointer;
}
button:hover{
    background: #353536;
}
.clear{
    clear: both;
}
</style>