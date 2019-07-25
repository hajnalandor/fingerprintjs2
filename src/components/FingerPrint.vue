<script lang="ts">
import Vue from 'vue';
import'clientjs';
import Fingerprint2 from 'fingerprintjs2';
// @TODO addblock is not in fingerprint
const client = new ClientJS();
export default Vue.extend({
  name: 'BrowserFinterprint',
  data () {    
    return {
      fingerPrintId: '',
      fp: {}

    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        Fingerprint2.get((components) => {
          this.getCustomFingerPr(components);
          this.buildfp(components);
        })
      },500)
    },
    getCustomFingerPr(fp2comp) {
      this.clientJsFp();
      this.fingerPrintjs2Fp(fp2comp);   
      this.fingerPrintId = btoa(this.fingerPrintId)
     },
    buildfp(fp2comp) {
      this.fp['fingerPrintId'] = this.fingerPrintId;
      fp2comp.forEach((data) => {
        if (data.key == 'availableScreenResolution') {
          this.setAvailableScreenResolutin(data);
        } else if (data.key == 'screenResolution') {
          this.setScreenResolution(data);      
        } else if (data.key == 'canvas') {
          this.setCanvas(data);
        } else if (data.key == 'plugins') {
          this.setPlugins(data);
        } else if (data.key == 'webgl') {
          this.setWebgl(data);
        } else {
          this.fp[data.key] = data.value;
        }
      });
      this.setClientJsComponents();
      console.log(this.fp)
    },
    clientJsFp() {
      this.fingerPrintId = client.getFingerprint()+'-'
      this.fingerPrintId += client.getCustomFingerprint(client.getTimeZone()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.getLanguage()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.getEngine(),client.getBrowser(),client.getBrowserVersion()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.getDevice(), client.getDeviceType())+ '-'
      this.fingerPrintId += client.getCustomFingerprint(client.getCPU()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.getOS,client.getOSVersion(),client.getSystemLanguage()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.isWindows(),client.isMac(), client.isLinux(),client.isUbuntu(),client.isSolaris()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.isChrome(),client.isSafari(),client.isMobileSafari(),client.isOpera()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.isMobile(),client.isMobileMajor(),client.isMobileAndroid(),client.isMobileOpera(),client.isMobileWindows(),client.isMobileBlackBerry()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.getScreenPrint()) + '-'
      this.fingerPrintId += client.getCustomFingerprint(client.isJava(),client.isFlash(),client.getFlashVersion()) + '-' 
    },
    fingerPrintjs2Fp(fp2comp) {
      for (var i = 0; i < fp2comp.length; i++) {
        if (Array.isArray(fp2comp[i].value)) {
        for (var j = 0; j < fp2comp[i].value.length; j++) {
          this.fingerPrintId += client.getCustomFingerprint(fp2comp[i].value[j])
          if (j < fp2comp[i].value.length - 1) {
            this.fingerPrintId += '-'
          }
        }
        } else {
          if (fp2comp[i].key == 'adBlock') {
            continue;
          }
          this.fingerPrintId += client.getCustomFingerprint(fp2comp[i].value) 
        }
        if (i < fp2comp.length - 1) {
          this.fingerPrintId += '-'
        }
      }
    },
    setAvailableScreenResolutin(data) {
      this.fp['availableScreenResolutionWidth'] = data.value[1];
      this.fp['availableScreenResolutionHeight'] = data.value[0];
    },
    setScreenResolution(data) {
      this.fp['screenResolutionWidth'] = data.value[1];
      this.fp['screenResolutionHeight'] = data.value[0];
    },
    setCanvas(data) {
      var canvas = {};
      data.value.forEach((canvasElement) => {
        canvas[canvasElement.substring(0,canvasElement.indexOf(':'))] = canvasElement.substring(canvasElement.indexOf(':') + 1, canvasElement.length);
      });
      this.fp['canvas'] = canvas;
    },
    setPlugins(data) {
      var plugins = [];
      data.value.forEach((element) => {
        plugins.push(element[0]);
      });
      this.fp['plugins'] = plugins;
    },
    setWebgl(data) {
      data.value.forEach((element) => {
        this.fp[element.substring(0,element.indexOf(':'))] = element.substring(element.indexOf(':') + 1, element.length); 
      });
    },
    setClientJsComponents() {
      this.fp['currentResolution'] = client.getCurrentResolution();
      this.fp['timeZoneAbbreviation'] = client.getTimeZone();
      this.fp['engine'] = client.getEngine();
      this.fp['engineVersion'] = client.getEngineVersion();
      this.fp['cpu'] = client.getCPU();
      this.fp['os'] = client.getOS();
      this.fp['osVersion'] = client.getOSVersion();
      this.fp['systemLanguage'] = client.getSystemLanguage();
      this.fp['getSoftwareVersion'] = client.getSoftwareVersion();
      this.fp['silverlight'] = client.isSilverlight();
      this.fp['silverlightVersion'] = client.getSilverlightVersion();
      this.fp['mimeType'] = client.getMimeTypes();
      this.fp['ismimeType'] = client.isMimeTypes();
      this.fp['canvasPrint'] = client.getCanvasPrint();
      this.setMobileInformations();
      this.setBrowserInformation();
      this.setDeviceInformation();
      this.setFlashAndJava();
    },
    setMobileInformations() {
      var mobile = {};
      mobile['isMobileSafari'] = client.isMobileSafari();
      mobile['isMobile'] = client.isMobile();
      mobile['isMobileMajor'] = client.isMobileMajor();
      mobile['isMobileAndroid'] = client.isMobileAndroid();
      mobile['isMobileOpera'] = client.isMobileOpera();
      mobile['isMobileWindows'] = client.isMobileWindows();
      mobile['isMobileBlackBerry'] = client.isMobileBlackBerry();
      mobile['isMobileIOS'] = client.isMobileIOS();
      mobile['isIphone'] = client.isIphone();
      mobile['isIpad'] = client.isIpad();
      mobile['isIpod'] = client.isIpod();

      this.fp['mobile'] = mobile;
    },
    setBrowserInformation() {
      this.fp['browserData'] = client.getBrowserData();
      this.fp['BrowserMajorVersion'] = client.getBrowserMajorVersion();
      this.fp['browser'] = client.getBrowser();
      this.fp['browserVersion'] = client.getBrowserVersion();
    },
    setDeviceInformation() {
      this.fp['device'] = client.getDevice();
      this.fp['deviceType'] = client.getDeviceType();
      this.fp['deviceVendor'] = client.getDeviceVendor();
      this.fp['deviceType'] = client.getDeviceType();
    },
    setFlashAndJava() {
      this.fp['java'] = client.isJava();
      this.fp['javaVersion'] = client.getJavaVersion();
      this.fp['flash'] = client.isFlash();
      this.fp['flashVersion'] = client.getFlashVersion();
    }
  } 
})

</script>
​
<style>
  
</style>
​
<template>
<div>
  <p>Data:</p>
  <p>{{fingerPrintId}}</p>
  <p>{{fp}}</p>
</div>
</template>