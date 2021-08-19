<template>
    <div class="background-gradient header d-flex">
        <div class="d-flex align-items-center">
            <img class="header_logo" src="../assets/logo.png" alt="logo">
            <h1 class="text-white">ONLYON</h1>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style>
    .header{
        height: 100px;
    }
    .header_logo{
        width: 90px;
    }
    .background-gradient{
        background: rgb(246,129,81);
        background: linear-gradient(304deg, rgba(246,129,81,1) 0%, rgba(174,69,143,1) 100%); 
    }
</style>