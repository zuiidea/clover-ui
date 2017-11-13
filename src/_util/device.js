const device = {}
const ua = navigator.userAgent
const windows = ua.match(/(Windows Phone);?[\s]+([\d.]+)?/)
const android = ua.match(/(Android);?[\s]+([\d.]+)?/)
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
const wechat = ua.match(/MicroMessenger/i)

device.wechat = device.ios = device.android = device.windows
= device.iphone = device.ipod = device.ipad = device.androidChrome = false

if (wechat) {
  device.wechat = true
}

// Windows
if (windows) {
  device.os = 'windows'
  device.osVersion = windows[2]
  device.windows = true
}
// Android
if (android && !windows) {
  device.os = 'android'
  device.osVersion = android[2]
  device.android = true
  device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0
}
if (ipad || iphone || ipod) {
  device.os = 'ios'
  device.ios = true
}
// iOS
if (iphone && !ipod) {
  device.osVersion = iphone[2].replace(/_/g, '.')
  device.iphone = true
}
if (ipad) {
  device.osVersion = ipad[2].replace(/_/g, '.')
  device.ipad = true
}
if (ipod) {
  device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
  device.iphone = true
}
// iOS 8+ changed UA
if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
  if (device.osVersion.split('.')[0] === '10') {
    device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]
  }
}

// Webview
device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i)
window.device = device
module.exports = device
