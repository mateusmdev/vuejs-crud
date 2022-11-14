<template>
    <div class="btn-add" v-on:click="toggle">
        <img src="../assets/plus.svg" alt="" />
    </div>
</template>

<script>
export default {
    name: 'ButtonAdd',
    props: {
        toggle: Function
    }
}
</script>

<style scoped>
    .btn-add{
        border-radius: 50%;
        background: #26273b;
        width: 40px;
        height: 40px;
        text-align: center;
        padding-top: 8px;
        position: absolute;
        right: 25px;
        top: 70px;
        cursor: pointer;
    }

    .btn-add img{
        width: 70%;
        height: 70%;
        filter: invert(70%);
    }
</style>