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
    console.log('fingerprint:  '+client.getFingerprint());
    console.log('getEngine:  '+client.getEngine());
    console.log('getSoftwareVersion:  '+client.getSoftwareVersion())
    console.log('getBrowserData:  '+client.getBrowserData())
    console.log('getUserAgent:  '+client.getUserAgent())
    console.log('getBrowser:  '+client.getBrowser())
    console.log('getBrowserVersion:  '+client.getBrowserVersion())
    console.log('getBrowserMajorVersion:  '+client.getBrowserMajorVersion())
    console.log('isChrome:  '+client.isChrome())
    console.log('isFirefox:  '+client.isFirefox())
    console.log('isSafari:  '+client.isSafari())
    console.log('isMobileSafari:  '+client.isMobileSafari())
    console.log('isOpera:  '+client.isOpera())
    console.log('getOS:  '+client.getOS())
    console.log('getOSVersion:  '+client.getOSVersion())
    console.log('isWindows:  '+client.isWindows())
    console.log('isMac:  '+client.isMac())
    console.log('isLinux:  '+client.isLinux())
    console.log('isUbuntu:  '+client.isUbuntu())
    console.log('isSolaris:  '+client.isSolaris())
    console.log('getDevice:  '+client.getDevice())
    console.log('getDeviceType:  '+client.getDeviceType())
    console.log('getDeviceVendor:  '+client.getDeviceVendor())
    console.log('getCPU:  '+client.getCPU())
    console.log('isMobile:  '+client.isMobile())
    console.log('isMobileMajor:  '+client.isMobileMajor())
    console.log('isMobileAndroid:  '+client.isMobileAndroid())
    console.log('isMobileOpera:  '+client.isMobileOpera())
    console.log('isMobileWindows:  '+client.isMobileWindows())
    console.log('isMobileBlackBerry:  '+client.isMobileBlackBerry())
    console.log('getScreenPrint:  '+client.getScreenPrint())
    console.log('getColorDepth:  '+client.getColorDepth())
    console.log('getCurrentResolution:  '+client.getCurrentResolution())
    console.log('getAvailableResolution:  '+client.getAvailableResolution())
    console.log('getDeviceXDPI:  '+client.getDeviceXDPI())
    console.log('getDeviceYDPI:  '+client.getDeviceYDPI())
    console.log('isJava:  '+client.isJava())
    console.log('isFlash:  '+client.isFlash())
    console.log('getFlashVersion:  '+client.getFlashVersion())
    console.log('isSilverlight:  '+client.isSilverlight())
    console.log('getTimeZone:  '+client.getTimeZone())
    console.log('getLanguage:  '+client.getLanguage())
    console.log('getSystemLanguage:  '+client.getSystemLanguage())
   




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
