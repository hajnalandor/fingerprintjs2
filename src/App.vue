<template>
  <div id="app">
   
  </div>
</template>

<script lang="ts">
import CreateFingerprint from './fingerprint/createFP';
export default {
  name: 'app',
  components: {
  },
  mounted() {
    const fingerprint = new CreateFingerprint();
    console.log(fingerprint.fp);
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
