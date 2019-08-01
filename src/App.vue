<template>
  <div id="app">
   
  </div>
</template>

<script lang="ts">
import Fingerprint from './fingerprint/createFP';
export default {
  name: 'app',
  components: {
  },
  mounted() {
    const fingerprint = new Fingerprint();
    console.log(fingerprint.create());
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
