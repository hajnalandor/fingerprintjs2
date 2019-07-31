export interface Fingerprint {
  adBlock? : string
  addBehavior? : boolean
  audio? : string
  availableScreenResolutionHeight? : number
  availableScreenResolutionWidth? : number
  browser? : string
  browserData? : BrowserData
  browserMajorVersion? : string
  browserVersion? : string
  canvas? : Canvas
  canvasPrint? : string
  colorDepth? : number
  cpu? : string
  cpuClass? : string
  currentResolution? : string
  data? : string
  device? : string
  deviceMemory? : number
  deviceType? : string
  deviceVendor? : string
  engine? : string
  engineVersion? : string
  extensions? : string
  fingerPrintId? : string
  flash? : boolean
  flashVersion? : string
  fonts? : string[]
  getSoftwareVersion? : string
  hardwareConcurrency? : number
  hasLiedBrowser? : boolean
  hasLiedLanguages? : boolean
  hasLiedOs? : boolean
  hasLiedResolution? : boolean
  indexedDb? : boolean
  ismimeType? : boolean
  java? : boolean
  javaVersion? : string
  language? : string
  localStorage? : boolean
  mimeType? : string
  mobile? : Mobile
  openDatabase? : boolean
  os? : string
  osVersion? : string
  platform? : string
  plugins? : string[]
  screenResolutionHeight? : number
  screenResolutionWidth? : number
  sessionStorage? : boolean
  silverlight? : boolean
  silverlightVersion? : string
  systemLanguage? : string
  timeZoneAbbreviation? : string
  timezone? : string
  timezoneOffset? : number
  touchSupport? : any[]
  userAgent? : string
  webdriver? : string
  webglAliasedLineWidthRange? : string[]
  webglAliasedPointSizeRange? : string[]
  webglAlphaBits? : string
  webglAntialiasing? : string
  webglBlueBits? : string
  webglDepthBits? : string
  webglFragmentShaderHighFloatPrecision? : string
  webglFragmentShaderHighFloatPrecisionRangeMax? : string
  webglFragmentShaderHighFloatPrecisionRangeMin? : string
  webglFragmentShaderHighIntPrecision? : string
  webglFragmentShaderHighIntPrecisionRangeMax? : string
  webglFragmentShaderHighIntPrecisionRangeMin? : string
  webglFragmentShaderLowFloatPrecision? : string
  webglFragmentShaderLowFloatPrecisionRangeMax? : string
  webglFragmentShaderLowFloatPrecisionRangeMin? : string
  webglFragmentShaderLowIntPrecision? : string
  webglFragmentShaderLowIntPrecisionRangeMax? : string
  webglFragmentShaderLowIntPrecisionRangeMin? : string
  webglFragmentShaderMediumFloatPrecision? : string
  webglFragmentShaderMediumFloatPrecisionRangeMax? : string
  webglFragmentShaderMediumFloatPrecisionRangeMin? : string
  webglFragmentShaderMediumIntPrecision? : string
  webglFragmentShaderMediumIntPrecisionRangeMax? : string
  webglFragmentShaderMediumIntPrecisionRangeMin? : string
  webglGreenBits? : string
  webglMaxAnisotropy? : string
  webglMaxCombinedTextureImageUnits? : string
  webglMaxCubeMapTextureSize? : string
  webglMaxFragmentUniformVectors? : string
  webglMaxRenderBufferSize? : string
  webglMaxTextureImageUnits? : string
  webglMaxTextureSize? : string
  webglMaxVaryingVectors? : string
  webglMaxVertexAttribs? : string
  webglMaxVertexTextureImageUnits? : string
  webglMaxVertexUniformVectors? : string
  webglMaxViewportDims? : string
  webglRedBits? : string
  webglRenderer? : string
  webglShadingLanguageVersion? : string
  webglStencilBits? : string
  webglUnmaskedRenderer? : string
  webglUnmaskedVendor? : string
  webglVendor? : string
  webglVendorAndRenderer? : string
  webglVersion? : string
  webglVertexShaderHighFloatPrecision? : string
  webglVertexShaderHighFloatPrecisionRangeMax? : string
  webglVertexShaderHighFloatPrecisionRangeMin? : string
  webglVertexShaderHighIntPrecision? : string
  webglVertexShaderHighIntPrecisionRangeMax? : string
  webglVertexShaderHighIntPrecisionRangeMin? : string
  webglVertexShaderLowFloatPrecision? : string
  webglVertexShaderLowFloatPrecisionRangeMax? : string
  webglVertexShaderLowFloatPrecisionRangeMin? : string
  webglVertexShaderLowIntPrecision? : string
  webglVertexShaderLowIntPrecisionRangeMax? : string
  webglVertexShaderLowIntPrecisionRangeMin? : string
  webglVertexShaderMediumFloatPrecision? : string
  webglVertexShaderMediumFloatPrecisionRangeMax? : string
  webglVertexShaderMediumFloatPrecisionRangeMin? : string
  webglVertexShaderMediumIntPrecision? : string
  webglVertexShaderMediumIntPrecisionRangeMax? : string
  webglVertexShaderMediumIntPrecisionRangeMin? : string
  [key: string] : any|string|number|boolean
}

export interface BrowserData {
  ua? : string
  browser? : any
  engine? : any
  os? : any
  device? : any
}

export interface Canvas {
  canvasWinding? : string
  canvasFp? : string
  [key: string] : string|undefined
}

export interface Mobile {
  isMobile? : boolean
  isMobileSafari? : boolean
  isMobileMajor? : boolean
  isMobileAndroid? : boolean
  isMobileOpera? : boolean
  isMobileWindows? : boolean
  isMobileBlackBerry? : boolean
  isMobileIOS? : boolean
  isIphone? : boolean
  isIpad? : boolean
  isIpod? : boolean
}



// export FP {
//   adBlock? : '',
//   addBehavior? : undefined,
//   audio? : undefined,
//   availableScreenResolutionHeight? : undefined,
//   availableScreenResolutionWidth? : undefined,
//   browser? : undefined,
//   browserData? : undefined,
//   browserMajorVersion? : undefined,
//   browserVersion? : undefined,
//   canvas? : {
//     canvasWinding? : undefined,
//     canvasFp? : undefined
//   } as Canvas,
//   canvasPrint? : undefined,
//   colorDepth? : undefined,
//   cpu? : undefined,
//   cpuClass? : undefined,
//   currentResolution? : undefined,
//   data? : undefined,
//   device? : undefined,
//   deviceMemory? : undefined,
//   deviceType? : undefined,
//   deviceVendor? : undefined,
//   engine? : undefined,
//   engineVersion? : undefined,
//   extensions? : undefined,
//   fingerPrintId? : undefined,
//   flash? : undefined,
//   flashVersion? : undefined,
//   fonts? : [],
//   getSoftwareVersion? : undefined,
//   hardwareConcurrency? : undefined,
//   hasLiedBrowser? : undefined,
//   hasLiedLanguages? : undefined,
//   hasLiedOs? : undefined,
//   hasLiedResolution? : undefined,
//   indexedDb? : undefined,
//   ismimeType? : undefined,
//   java? : undefined,
//   javaVersion? : undefined,
//   language? : undefined,
//   localStorage? : undefined,
//   mimeType? : undefined,
//   mobile? : {
//     isMobile? : undefined,
//     isMobileSafari? : undefined,
//     isMobileMajor? : undefined,
//     isMobileAndroid? : undefined,
//     isMobileOpera? : undefined,
//     isMobileWindows? : undefined,
//     isMobileBlackBerry? : undefined,
//     isMobileIOS? : undefined,
//     isIphone? : undefined,
//     isIpad? : undefined,
//     isIpod? : undefined
//   } as Mobile,
//   openDatabase? : undefined,
//   os? : undefined,
//   osVersion? : undefined,
//   platform? : undefined,
//   plugins? : [],
//   screenResolutionHeight? : undefined,
//   screenResolutionWidth? : undefined,
//   sessionStorage? : undefined,
//   silverlight? : undefined,
//   silverlightVersion? : undefined,
//   systemLanguage? : undefined,
//   timeZoneAbbreviation? : undefined,
//   timezone? : undefined,
//   timezoneOffset? : undefined,
//   touchSupport? : [],
//   userAgent? : undefined,
//   webdriver? : undefined,
//   webglAliasedLineWidthRange? : [],
//   webglAliasedPointSizeRange? : [],
//   webglAlphaBits? : undefined,
//   webglAntialiasing? : undefined,
//   webglBlueBits? : undefined,
//   webglDepthBits? : undefined,
//   webglFragmentShaderHighFloatPrecision? : undefined,
//   webglFragmentShaderHighFloatPrecisionRangeMax? : undefined,
//   webglFragmentShaderHighFloatPrecisionRangeMin? : undefined,
//   webglFragmentShaderHighIntPrecision? : undefined,
//   webglFragmentShaderHighIntPrecisionRangeMax? : undefined,
//   webglFragmentShaderHighIntPrecisionRangeMin? : undefined,
//   webglFragmentShaderLowFloatPrecision? : undefined,
//   webglFragmentShaderLowFloatPrecisionRangeMax? : undefined,
//   webglFragmentShaderLowFloatPrecisionRangeMin? : undefined,
//   webglFragmentShaderLowIntPrecision? : undefined,
//   webglFragmentShaderLowIntPrecisionRangeMax? : undefined,
//   webglFragmentShaderLowIntPrecisionRangeMin? : undefined,
//   webglFragmentShaderMediumFloatPrecision? : undefined,
//   webglFragmentShaderMediumFloatPrecisionRangeMax? : undefined,
//   webglFragmentShaderMediumFloatPrecisionRangeMin? : undefined,
//   webglFragmentShaderMediumIntPrecision? : undefined,
//   webglFragmentShaderMediumIntPrecisionRangeMax? : undefined,
//   webglFragmentShaderMediumIntPrecisionRangeMin? : undefined,
//   webglGreenBits? : undefined,
//   webglMaxAnisotropy? : undefined,
//   webglMaxCombinedTextureImageUnits? : undefined,
//   webglMaxCubeMapTextureSize? : undefined,
//   webglMaxFragmentUniformVectors? : undefined,
//   webglMaxRenderBufferSize? : undefined,
//   webglMaxTextureImageUnits? : undefined,
//   webglMaxTextureSize? : undefined,
//   webglMaxVaryingVectors? : undefined,
//   webglMaxVertexAttribs? : undefined,
//   webglMaxVertexTextureImageUnits? : undefined,
//   webglMaxVertexUniformVectors? : undefined,
//   webglMaxViewportDims? : undefined,
//   webglRedBits? : undefined,
//   webglRenderer? : undefined,
//   webglShadingLanguageVersion? : undefined,
//   webglStencilBits? : undefined,
//   webglUnmaskedRenderer? : undefined,
//   webglUnmaskedVendor? : undefined,
//   webglVendor? : undefined,
//   webglVendorAndRenderer? : undefined,
//   webglVersion? : undefined,
//   webglVertexShaderHighFloatPrecision? : undefined,
//   webglVertexShaderHighFloatPrecisionRangeMax? : undefined,
//   webglVertexShaderHighFloatPrecisionRangeMin? : undefined,
//   webglVertexShaderHighIntPrecision? : undefined,
//   webglVertexShaderHighIntPrecisionRangeMax? : undefined,
//   webglVertexShaderHighIntPrecisionRangeMin? : undefined,
//   webglVertexShaderLowFloatPrecision? : undefined,
//   webglVertexShaderLowFloatPrecisionRangeMax? : undefined,
//   webglVertexShaderLowFloatPrecisionRangeMin? : undefined,
//   webglVertexShaderLowIntPrecision? : undefined,
//   webglVertexShaderLowIntPrecisionRangeMax? : undefined,
//   webglVertexShaderLowIntPrecisionRangeMin? : undefined,
//   webglVertexShaderMediumFloatPrecision? : undefined,
//   webglVertexShaderMediumFloatPrecisionRangeMax? : undefined,
//   webglVertexShaderMediumFloatPrecisionRangeMin? : undefined,
//   webglVertexShaderMediumIntPrecision? : undefined,
//   webglVertexShaderMediumIntPrecisionRangeMax? : undefined,
//   webglVertexShaderMediumIntPrecisionRangeMin? : undefined
// } as Fingerprint


