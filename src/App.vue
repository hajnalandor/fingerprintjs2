<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <FingerPrint />

  </div>
</template>

<script>
 import FingerPrint from './components/FingerPrint'
// import Vue from 'vue';

// let vm = new Vue({
//   data: {
//     fingerPrintId: '',
//     canvasPrint: '',
//     myCFP: ''
//   }
// })

// // @TODO typeingSpeed median
// // @TODO public ip
// var start = new Date().getTime()
// import HelloWorld from './components/HelloWorld.vue'
// import 'clientjs'
// import Fingerprint2 from 'fingerprintjs2'
// //import { GPU } from 'gpu.js';

// var client = new ClientJS();

// var fingerPrintId = '';
// var fp = {};

// //const gpu = new GPU();
// // Create the GPU accelerated function from a kernel
// // function that computes a single element in the
// // 512 x 512 matrix (2D array). The kernel function
// // is run in a parallel manner in the GPU resulting
// // in very fast computations! (...sometimes)
// // const matMult = gpu.createKernel(function(a, b) {
// //     var sum = 0;
// //     // for (var i = 0; i < 512; i++) {
// //     //     sum += a[this.thread.y][i] * b[i][this.thread.x];
// //     // }
// //     sum = Math.cos(a[0]) + Math.tan(b[0])
// //     return sum;
// // })
// // .setOutput([512, 512])
// //   .setOutputToTexture(true)
 
// // // Perform matrix multiplication on 2 matrices of size 512 x 512
// // let c = matMult([1,1], [-1.300,2]) ;
// // console.log(c);
// console.log("canvasprint");
// vm.canvasPrint = client.getCanvasPrint();
// let hash = 0;
// let char;
// for (let i = 0; i < vm.canvasPrint.length; i++) {
//     char = vm.canvasPrint.charCodeAt(i);
// 		hash = ((hash<<5)-hash)+char;
//     hash = hash & hash; 
// }
// console.log(hash);

// let canvasFP = () => {
//     var canvas = document.createElement('canvas');
//     var ctx = canvas.getContext('2d');
//     var txt = 'i9asdm..$#po((^@KbXrww!~cz|?#$%^<&*`I9ASDM..$#PO((^@kBxRWW!~CZ|?#$%^';
//     ctx.textBaseline = "top";
//     ctx.font = "25px 'Arial'";
//     ctx.textBaseline = "alphabetic";
//     ctx.rotate(.05);
//     ctx.fillStyle = "#f60";
//     ctx.fillRect(125,1,62,20);
//     ctx.fillStyle = "#069";
//     ctx.fillText(txt, 2, 15);
//     ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
//     ctx.fillText(txt, 4, 17);
//     ctx.shadowBlur=10;
//     ctx.shadowColor="blue";
//     ctx.fillRect(-20,10,234,5);
//     var strng=canvas.toDataURL();

// document.body.appendChild(canvas);    
    
//     var hash=0;
//     let char;
//     if (strng.length==0) return 'canvas not supported!';
//     for (let i = 0; i < strng.length; i++) {
// 		char = strng.charCodeAt(i);
// 		hash = ((hash<<5)-hash)+char;
//     hash = hash & hash;
//   }
//   //  canvas.height = 0;
//   //  canvas.width = 0;
// 	return hash;
// }

// vm.myCFP = canvasFP()
// console.log(vm.myCFP);




// function findIP(onNewIP) { //  onNewIp - your listener function for new IPs
//     var promise = new Promise(function (resolve, reject) {
//         try {
//             var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection || window.msRTCPeerConnection; //compatibility for firefox and chrome
//             var pc = new myPeerConnection({ iceServers: [] }),
//                 noop = function () { },
//                 localIPs = {},
//                 ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
//                 key;
//             function ipIterate(ip) {
//                 if (!localIPs[ip]) onNewIP(ip);
//                 localIPs[ip] = true;
//             }
//             pc.createDataChannel(""); //create a bogus data channel
//             pc.createOffer(function (sdp) {
//                 sdp.sdp.split('\n').forEach(function (line) {
//                     if (line.indexOf('candidate') < 0) return;
//                     line.match(ipRegex).forEach(ipIterate);
//                 });
//                 pc.setLocalDescription(sdp, noop, noop);
//             }, noop); // create offer and set local description

//             pc.onicecandidate = function (ice) { //listen for candidate events
//                 if (ice && ice.candidate && ice.candidate.candidate && ice.candidate.candidate.match(ipRegex)) {
//                     ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
//                 }
//                 resolve("FindIPsDone");
//                 return;
//             };
//         }
//         catch (ex) {
//             reject(Error(ex));
//         }
//     });// New Promise(...{ ... });
//     return promise;
// };

// //This is the callback that gets run for each IP address found
// function foundNewIP(ip) {
//     if (typeof window.ipAddress === 'undefined')
//     {
//         window.ipAddress = ip;
//     }
//     else
//     {
//         window.ipAddress += " - " + ip;
//     }
// }

// //This is How to use the Waitable findIP function, and react to the
// //results arriving
// var ipWaitObject = findIP(foundNewIP);        // Puts found IP(s) in window.ipAddress
// ipWaitObject.then(
//     function (result) {
//         fp.privateIp = window.ipAddress;
//     },
//     function (err) {
//         alert ("IP(s) NOT Found.  FAILED!  " + err)
//     }
// );


 

   

// // let httpGetIPAsync = (theUrl, callback) => {
// //     var xmlHttp = new XMLHttpRequest();
// //     xmlHttp.onreadystatechange = function() { 
// //         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
// //             console.log('ipapi:  ')
// //             console.log(xmlHttp.responseText)
// //             fp.privateIp = xmlHttp.responseText.substring(xmlHttp.responseText.indexOf(':')+2,xmlHttp.responseText.length -3);
// //         }
// //     }
// //     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
// //     xmlHttp.send(null);
// // }
// // httpGetIPAsync('https://ipapi.co/json/',printIP);

// // let printIP = (response) => {
// //   console.log(response);
// // }

// // let httpGetGeoIPAsync = (theUrl, callback) => {
// //   var xmlHttp = new XMLHttpRequest();
// //   xmlHttp.onreadystatechange = function() {
// //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
// //             console.log("ASD")
// //             console.log(xmlHttp.responseText);
// //         }
// //   }
// //   xmlHttp.open("GET", theUrl, true); // true for asynchronous 
// //   xmlHttp.send(null);
// // }

// // httpGetGeoIPAsync('https://json.geoiplookup.io/api', printIP);



// if (window.requestIdleCallback) {
//     requestIdleCallback(function () {
//         Fingerprint2.get(function (components) {
//          // console.log(components) // an array of components: {key: ..., value: ...}
          
//           getCustomFingerPr(components)
//           buildfp(components)         
// });
//         });
    
// } else {
//     setTimeout(function () {
//         Fingerprint2.get(function (components) {
//         //  console.log(components) // an array of components: {key: ..., value: ...}
        
//         getCustomFingerPr(components)
//         buildfp(components)

      

// }); 
//     }, 500)

// }


// let isPrivateMode = function() {
//   return new Promise((resolve) => {
//     const yes = () => resolve(true); // is in private mode
//     const not = () => resolve(false); // not in private mode
//     const testLocalStorage = () => {
//       try {
//         if (localStorage.length) not();
//         else {
//           localStorage.x = 1;
//           localStorage.removeItem('x');
//           not();
//         }
//       } catch (e) {
//         // Safari only enables cookie in private mode
//         // if cookie is disabled, then all client side storage is disabled
//         // if all client side storage is disabled, then there is no point
//         // in using private mode
//         navigator.cookieEnabled ? yes() : not();
//       }
//     };
//     // Chrome & Opera
//     var fs = window.webkitRequestFileSystem || window.RequestFileSystem;
//     if (fs) {
//       return void fs(window.TEMPORARY, 100, not, yes);
//     }
//     // Firefox
//     if ('MozAppearance' in document.documentElement.style) {
//       if (indexedDB === null) return yes();
//       const db = indexedDB.open('test');
//       db.onerror = yes;
//       db.onsuccess = not;
//       return void 0;
//     }
//     // Safari
//     const isSafari = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
//     if (isSafari) {
//       const version = parseInt(isSafari[1], 10);
//       if (version < 11) return testLocalStorage();
//       try {
//         window.openDatabase(null, null, null, null);
//         return not();
//       } catch (_) {
//         return yes();
//       }
//     }
//     // IE10+ & Edge InPrivate
//     if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
//       return yes();
//     }
//     // default navigation mode
//     return not();
//   });
// }

// let setAvailableScreenResolutin = (data) => {
//    fp['availableScreenResolutionWidth'] = data.value[1];
//    fp['availableScreenResolutionHeight'] = data.value[0];
// };

// let setScreenResolution = (data) => {
//   fp['screenResolutionWidth'] = data.value[1];
//       fp['screenResolutionHeight'] = data.value[0];
// };

// let setCanvas = (data) => {
//   var canvas = {};
//   data.value.forEach((canvasElement) => {
//     canvas[canvasElement.substring(0,canvasElement.indexOf(':'))] = canvasElement.substring(canvasElement.indexOf(':') + 1, canvasElement.length);
//   });
//   fp.canvas = canvas;
// };

// let setPlugins = (data) => {
//   var plugins = [];
//     data.value.forEach((element) => {
//     plugins.push(element[0]);
//   });
//   fp.plugins = plugins;
// };

// let setWebgl = (data) => {
//   data.value.forEach((element) => {
//     fp[element.substring(0,element.indexOf(':'))] = element.substring(element.indexOf(':') + 1, element.length); 
//   });
// };

// var buildfp = (fp2comp) => {
//   fp.fingerPrintId = fingerPrintId;
//   fp2comp.forEach((data) => {
//     if (data.key == 'availableScreenResolution') {
//       setAvailableScreenResolutin(data);
//     } else if (data.key == 'screenResolution') {
//       setScreenResolution(data);      
//     } else if (data.key == 'canvas') {
//       setCanvas(data);
//     }else if (data.key == 'plugins') {
//       setPlugins(data);
//     } else if (data.key == 'webgl') {
//       setWebgl(data);
//     } else {
//       fp[data.key] = data.value;
//     }
//   });
//   setClientJsComponents();
//   setIncognitoInformation();
//   console.log(fp)
// }

// let setIncognitoInformation = () => {
//    isPrivateMode().then(function (isPrivate) {
//   fp.isPrivate = isPrivate;
//   })
// };

// let setClientJsComponents = () => {
//   fp.currentResolution = client.getCurrentResolution();
//   fp.timeZoneAbbreviation = client.getTimeZone();
//   fp.engine = client.getEngine();
//   fp.engineVersion = client.getEngineVersion();
//   fp.cpu = client.getCPU();
//   fp.os = client.getOS();
//   fp.osVersion = client.getOSVersion();
//   fp.systemLanguage = client.getSystemLanguage();
//   fp.getSoftwareVersion = client.getSoftwareVersion();
//   fp.silverlight = client.isSilverlight();
//   fp.silverlightVersion = client.getSilverlightVersion();
//   fp.mimeType = client.getMimeTypes();
//   fp.ismimeType = client.isMimeTypes();
//   fp.canvasPrint = client.getCanvasPrint();
//   setMobileInformations();
//   setBrowserInformation();
//   setDeviceInformation();
//   setFlashAndJava();
// };

// let setFlashAndJava = () => {
//   fp.java = client.isJava();
//   fp.javaVersion = client.getJavaVersion();
//   fp.flash = client.isFlash();
//   fp.flashVersion = client.getFlashVersion();
// };

// let setDeviceInformation = () => {
//   fp.device = client.getDevice();
//   fp.deviceType = client.getDeviceType();
//   fp.deviceVendor = client.getDeviceVendor();
//   fp.deviceType = client.getDeviceType();
// };

// let setBrowserInformation = () => {
//   fp.browserData = client.getBrowserData();
//   fp.BrowserMajorVersion = client.getBrowserMajorVersion();
//   fp.browser = client.getBrowser();
//   fp.browserVersion = client.getBrowserVersion();
// };

// let setMobileInformations = () => {
//   var mobile = {};
//   mobile.isMobileSafari = client.isMobileSafari();
//   mobile.isMobile = client.isMobile();
//   mobile.isMobileMajor = client.isMobileMajor();
//   mobile.isMobileAndroid = client.isMobileAndroid();
//   mobile.isMobileOpera = client.isMobileOpera();
//   mobile.isMobileWindows = client.isMobileWindows();
//   mobile.isMobileBlackBerry = client.isMobileBlackBerry();
//   mobile.isMobileIOS = client.isMobileIOS();
//   mobile.isIphone = client.isIphone();
//   mobile.isIpad = client.isIpad();
//   mobile.isIpod = client.isIpod();

//   fp.mobile = mobile;
// };

// // fp2comp == fingerPrintjs2 components
// let getCustomFingerPr = (fp2comp) => {
//     clientJsFp();
//     fingerPrintjs2Fp(fp2comp);

//     var end = new Date().getTime()

//     //fingerPrint base64 encoding
//     fingerPrintId = btoa(fingerPrintId)
//     console.log("time in millisec:  "+(end-start))
//   }

//   let clientJsFp = () => {
//     fingerPrintId = client.getFingerprint()+'-'
//     fingerPrintId += client.getCustomFingerprint(client.getTimeZone()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.getLanguage()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.getEngine(),client.getBrowser(),client.getBrowserVersion()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.getDevice(), client.getDeviceType())+ '-'
//     fingerPrintId += client.getCustomFingerprint(client.getCPU()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.getOS,client.getOSVersion(),client.getSystemLanguage()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.isWindows(),client.isMac(), client.isLinux(),client.isUbuntu(),client.isSolaris()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.isChrome(),client.isSafari(),client.isMobileSafari(),client.isOpera()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.isMobile(),client.isMobileMajor(),client.isMobileAndroid(),client.isMobileOpera(),client.isMobileWindows(),client.isMobileBlackBerry()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.getScreenPrint()) + '-'
//     fingerPrintId += client.getCustomFingerprint(client.isJava(),client.isFlash(),client.getFlashVersion()) + '-' 
   
//   }

//   let fingerPrintjs2Fp = (fp2comp) => {
//     console.log("fingerPrintjs2")
//     console.log(fp2comp)


//     for (var i = 0; i < fp2comp.length; i++) {
//      if (Array.isArray(fp2comp[i].value)) {
//        for (var j = 0; j < fp2comp[i].value.length; j++) {
//          fingerPrintId += client.getCustomFingerprint(fp2comp[i].value[j])
//          if (j < fp2comp[i].value.length - 1) {
//             fingerPrintId += '-'
//           }
//         }
//      } else {
//         if (fp2comp[i].key == 'adBlock') {
//           continue;
//         }
//       fingerPrintId += client.getCustomFingerprint(fp2comp[i].value) 
//      }
     
//      if (i < fp2comp.length - 1) {
//        fingerPrintId += '-'
//      }
//    }
//   vm.fingerPrintId = fingerPrintId;
//   } 


export default {
  name: 'app',
  components: {
    FingerPrint
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
