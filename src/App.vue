<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   


  </div>
</template>


<script>
var start = new Date().getTime()
import HelloWorld from './components/HelloWorld.vue'
import 'clientjs'
import Fingerprint2 from 'fingerprintjs2'

if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        Fingerprint2.get(function (components) {
         // console.log(components) // an array of components: {key: ..., value: ...}
          var fp2comp = components
          getCustomFingerPr(fp2comp)

        })
    })
} else {
    setTimeout(function () {
        Fingerprint2.get(function (components) {
        //  console.log(components) // an array of components: {key: ..., value: ...}
        var fp2comp = components
        getCustomFingerPr(fp2comp)
        })  
    }, 500)

}

var getCustomFingerPr = function (fp2comp) {
    var client = new ClientJS();

   

    var fingerPr = client.getFingerprint()+'-'
    fingerPr += client.getCustomFingerprint(client.getTimeZone()) + '-'
    fingerPr += client.getCustomFingerprint(client.getLanguage()) + '-'
    fingerPr += client.getCustomFingerprint(client.getEngine(),client.getBrowser(),client.getBrowserVersion()) + '-'
    fingerPr += client.getCustomFingerprint(client.getDevice(), client.getDeviceType())+ '-'
    fingerPr += client.getCustomFingerprint(client.getCPU()) + '-'
    fingerPr += client.getCustomFingerprint(client.getOS,client.getOSVersion(),client.getSystemLanguage()) + '-'
    fingerPr += client.getCustomFingerprint(client.isWindows(),client.isMac(), client.isLinux(),client.isUbuntu(),client.isSolaris()) + '-'
    fingerPr += client.getCustomFingerprint(client.isChrome(),client.isSafari(),client.isMobileSafari(),client.isOpera()) + '-'
    fingerPr += client.getCustomFingerprint(client.isMobile(),client.isMobileMajor(),client.isMobileAndroid(),client.isMobileOpera(),client.isMobileWindows(),client.isMobileBlackBerry()) + '-'
    fingerPr += client.getCustomFingerprint(client.getScreenPrint()) + '-'
    fingerPr += client.getCustomFingerprint(client.isJava(),client.isFlash(),client.getFlashVersion()) + '-' 
   
   
   for (var i = 0; i < fp2comp.length; i++) {
     if (Array.isArray(fp2comp[i].value)) {
       for (var j = 0; j < fp2comp[i].value.length; j++) {
         fingerPr += client.getCustomFingerprint(fp2comp[i].value[j])
         if (j < fp2comp[i].value.length - 1) {
            fingerPr += '-'
          }
       }
     } else {
     fingerPr += client.getCustomFingerprint(fp2comp[i].value)
     }
     
     if (i < fp2comp.length - 1) {
       fingerPr += '-'
     }
   }
 
    
    
    //encoded fingerPrint
    console.log(btoa(fingerPr))
    //decoded fingerPrint
    console.log(atob(btoa(fingerPr)))
    var end = new Date().getTime()
    console.log("time in millisec:  "+(end-start))
  }


export default {
  name: 'app',
 
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
