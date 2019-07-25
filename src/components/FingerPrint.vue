<script lang="ts">
var start = new Date().getTime();
import Vue from 'vue';
import'clientjs';
import Fingerprint2 from 'fingerprintjs2';

const client = new ClientJS();
// var fingerPrintId = '';
// var fp = {};
 
export default Vue.extend({
  name: 'BrowserFinterprint',
  data () {    
    return {
      fingerPrintId: '',
      fp: {}
    }
  },
  created() {
    init();
  },
  methods: {
    getCustomFingerPr() {
      return getCustomFingerPr(this.fp2comp);
    },
    getFingerPrintJson() {
      return buildfp(this.fp2comp);
    }
  }
  
})

let init = () => {
  setTimeout(() => {
    Fingerprint2.get((components) => {
      getCustomFingerPr(components);
      buildfp(components);
      console.log(components);
      console.log(fp);
    })
  },500)
}

let setAvailableScreenResolutin = (data) => {
   fp['availableScreenResolutionWidth'] = data.value[1];
   fp['availableScreenResolutionHeight'] = data.value[0];
};

let setScreenResolution = (data) => {
  fp['screenResolutionWidth'] = data.value[1];
      fp['screenResolutionHeight'] = data.value[0];
};

let setCanvas = (data) => {
  var canvas = {};
  data.value.forEach((canvasElement) => {
    canvas[canvasElement.substring(0,canvasElement.indexOf(':'))] = canvasElement.substring(canvasElement.indexOf(':') + 1, canvasElement.length);
  });
  fp['canvas'] = canvas;
};

let setPlugins = (data) => {
  var plugins = [];
    data.value.forEach((element) => {
    plugins.push(element[0]);
  });
  fp['plugins'] = plugins;
};

let setWebgl = (data) => {
  data.value.forEach((element) => {
    fp[element.substring(0,element.indexOf(':'))] = element.substring(element.indexOf(':') + 1, element.length); 
  });
};

let buildfp = (fp2comp) => {
  fp['fingerPrintId'] = fingerPrintId;
  fp2comp.forEach((data) => {
    if (data.key == 'availableScreenResolution') {
      setAvailableScreenResolutin(data);
    } else if (data.key == 'screenResolution') {
      setScreenResolution(data);      
    } else if (data.key == 'canvas') {
      setCanvas(data);
    }else if (data.key == 'plugins') {
      setPlugins(data);
    } else if (data.key == 'webgl') {
      setWebgl(data);
    } else {
      fp[data.key] = data.value;
    }
  });
  setClientJsComponents();
  console.log(fp)
}

let setClientJsComponents = () => {
  fp['currentResolution'] = client.getCurrentResolution();
  fp['timeZoneAbbreviation'] = client.getTimeZone();
  fp['engine'] = client.getEngine();
  fp['engineVersion'] = client.getEngineVersion();
  fp['cpu'] = client.getCPU();
  fp['os'] = client.getOS();
  fp['osVersion'] = client.getOSVersion();
  fp['systemLanguage'] = client.getSystemLanguage();
  fp['getSoftwareVersion'] = client.getSoftwareVersion();
  fp['silverlight'] = client.isSilverlight();
  fp['silverlightVersion'] = client.getSilverlightVersion();
  fp['mimeType'] = client.getMimeTypes();
  fp['ismimeType'] = client.isMimeTypes();
  fp['canvasPrint'] = client.getCanvasPrint();
  setMobileInformations();
  setBrowserInformation();
  setDeviceInformation();
  setFlashAndJava();
};

let setFlashAndJava = () => {
  fp['java'] = client.isJava();
  fp['javaVersion'] = client.getJavaVersion();
  fp['flash'] = client.isFlash();
  fp['flashVersion'] = client.getFlashVersion();
};

let setDeviceInformation = () => {
  fp['device'] = client.getDevice();
  fp['deviceType'] = client.getDeviceType();
  fp['deviceVendor'] = client.getDeviceVendor();
  fp['deviceType'] = client.getDeviceType();
};

let setBrowserInformation = () => {
  fp['browserData'] = client.getBrowserData();
  fp['BrowserMajorVersion'] = client.getBrowserMajorVersion();
  fp['browser'] = client.getBrowser();
  fp['browserVersion'] = client.getBrowserVersion();
};

let setMobileInformations = () => {
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

  fp['mobile'] = mobile;
};


// fp2comp == fingerPrintjs2 components
let getCustomFingerPr = (fp2comp) => {
    clientJsFp();
    fingerPrintjs2Fp(fp2comp);

    var end = new Date().getTime()

    //fingerPrint base64 encoding
    fingerPrintId = btoa(fingerPrintId)
    console.log("time in millisec:  "+(end-start))
  }


  let clientJsFp = () => {
    fingerPrintId = client.getFingerprint()+'-'
    fingerPrintId += client.getCustomFingerprint(client.getTimeZone()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.getLanguage()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.getEngine(),client.getBrowser(),client.getBrowserVersion()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.getDevice(), client.getDeviceType())+ '-'
    fingerPrintId += client.getCustomFingerprint(client.getCPU()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.getOS,client.getOSVersion(),client.getSystemLanguage()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.isWindows(),client.isMac(), client.isLinux(),client.isUbuntu(),client.isSolaris()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.isChrome(),client.isSafari(),client.isMobileSafari(),client.isOpera()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.isMobile(),client.isMobileMajor(),client.isMobileAndroid(),client.isMobileOpera(),client.isMobileWindows(),client.isMobileBlackBerry()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.getScreenPrint()) + '-'
    fingerPrintId += client.getCustomFingerprint(client.isJava(),client.isFlash(),client.getFlashVersion()) + '-' 
   
  }

  let fingerPrintjs2Fp = (fp2comp) => {
    console.log("fingerPrintjs2")
    console.log(fp2comp)


    for (var i = 0; i < fp2comp.length; i++) {
     if (Array.isArray(fp2comp[i].value)) {
       for (var j = 0; j < fp2comp[i].value.length; j++) {
         fingerPrintId += client.getCustomFingerprint(fp2comp[i].value[j])
         if (j < fp2comp[i].value.length - 1) {
            fingerPrintId += '-'
          }
        }
     } else {
        if (fp2comp[i].key == 'adBlock') {
          continue;
        }
      fingerPrintId += client.getCustomFingerprint(fp2comp[i].value) 
     }
     
     if (i < fp2comp.length - 1) {
       fingerPrintId += '-'
     }
   }
  } 
</script>
​
<style>
  
</style>
​
<template>
  <p>Valami</p>
</template>