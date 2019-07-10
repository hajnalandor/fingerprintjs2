<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>



  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import 'clientjs'
var comp


export default {
  name: 'app',
  created: function () {
    var client = new ClientJS();

    var fingerPr = client.getFingerprint()+'-'
    fingerPr += client.getCustomFingerprint(client.getTimeZone()) + '-'
    fingerPr += client.getCustomFingerprint(client.getLanguage()) + '-'
    fingerPr += client.getCustomFingerprint(client.getEngine(),client.getBrowser(),client.getBrowserVersion()) + '-'
    fingerPr += client.getCustomFingerprint(client.getDevice(), client.getDeviceType())+ '-'
    fingerPr += client.getCustomFingerprint(client.getOS,client.getOSVersion(),client.getCPU(),client.getSystemLanguage()) + '-'
    fingerPr += client.getCustomFingerprint(client.isWindows(),client.isMac(), client.isLinux(),client.isUbuntu(),client.isSolaris()) + '-'
    fingerPr += client.getCustomFingerprint(client.isChrome(),client.isSafari(),client.isMobileSafari(),client.isOpera()) + '-'
    fingerPr += client.getCustomFingerprint(client.isMobile(),client.isMobileMajor(),client.isMobileAndroid(),client.isMobileOpera(),client.isMobileWindows(),client.isMobileBlackBerry()) + '-'
    fingerPr += client.getCustomFingerprint(client.getScreenPrint()) + '-'
    fingerPr += client.getCustomFingerprint(client.isJava(),client.isFlash(),client.getFlashVersion()) 
    //encoded fingerPrint
    console.log(btoa(fingerPr))
    //decoded fingerPrint
    console.log(atob(btoa(fingerPr)))



  },
  components: {
    HelloWorld
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
