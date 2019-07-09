<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  <ul>
  <li v-for="c in values">
    {{ c }}
    <p>joska</p>
  </li>
</ul>


  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Fingerprint2 from 'fingerprintjs2'

var comp



if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        Fingerprint2.get(function (components) {
          console.log(components) // an array of components: {key: ..., value: ...}
          comp = components
        })
    })
} else {
    setTimeout(function () {
        Fingerprint2.get(function (components) {
          console.log(components) // an array of components: {key: ..., value: ...}
        comp = components
        })  
    }, 500)
}
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  props: {
    values: ["ANDOR","JOSKA"]
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
