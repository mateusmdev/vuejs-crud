<template>
  <router-view/>
</template>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body{
    font-size: 1rem;
    background: #1b1c31;
    color: #fbfdfd;
    margin: 0 1em
  }
  input[type=text],
  input[type=number],
  input[type=password], 
  select,
  option{
    width: 250px;
    border: none;
    outline: none;
    background: #1b1c31;
    color: #aebbc4;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
}
input[type=text]:focus,
  input[type=number]:focus, 
  select:focus,
  option:focus{
  border: 1px solid #aebbc4;
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
