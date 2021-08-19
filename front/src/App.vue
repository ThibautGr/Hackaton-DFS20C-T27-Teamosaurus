<template>
  <div id="app">
    <Header>
      <router-link to="/">Home</router-link> |
    </Header>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header';
export default {
  components:{
    Header
  }
}
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #171322;
}
</style>
