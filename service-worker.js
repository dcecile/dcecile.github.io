"use strict";var precacheConfig=[["/index.html","58e0e97b735abcb6bbf221b342d91491"],["/static/css/main.5285dd3a.css","5285dd3aec0bd56bf375ec4bf0e7db18"],["/static/js/main.2ea84d35.js","42d24abc162f8a59ec61d3a6cdcf2eac"],["/static/media/500px.e3046539.svg","e3046539308ff5570e6f10ac678da7d1"],["/static/media/arrow-left.f9a44e1c.svg","f9a44e1ccb9f44cd4de1da8fe7f6f4d8"],["/static/media/arrow-right.dc372a07.svg","dc372a07777e87891aaac087cfbe60ad"],["/static/media/box.bfde84f9.svg","bfde84f9afae453aeffd4f63359461cc"],["/static/media/calendar.b3d6e64c.svg","b3d6e64c582711b7961aee4c427535dd"],["/static/media/external-link.ac05cd4f.svg","ac05cd4fcb0cd58ddb90c1cecf80f77e"],["/static/media/eye.62517b9b.svg","62517b9ba0aa6eb7d9a48cd982b9fa77"],["/static/media/github.f5a069d2.svg","f5a069d24c7855d24188c14f570b6a57"],["/static/media/heart.502189ae.svg","502189aef3b96acbcddedbb54a043638"],["/static/media/home.55644be0.svg","55644be0d4a9382b8f1b58830cd536c6"],["/static/media/linkedin.48a2133d.svg","48a2133dd5c34ad46cc6ab6ff06c03ec"],["/static/media/mail.20e8982e.svg","20e8982ec7e03638afe27f5c3e897681"],["/static/media/map-pin.b2f804bd.svg","b2f804bda31dee415fc2b1ff7ba9315f"],["/static/media/printer.cb409233.svg","cb4092339e30e3b581db1c092e10bc20"],["/static/media/stack-overflow.1efb7f59.svg","1efb7f590e64fb60cc14c0822fa30099"],["/static/media/texgyreschola-bold.184b5305.woff2","184b5305ed02d8f9f39dacc794933891"],["/static/media/texgyreschola-italic.f08f3eb1.woff2","f08f3eb193e5aa253a7caadf5a1f15cd"],["/static/media/texgyreschola-regular.7bb0a807.woff2","7bb0a807342a8839173de906ed501524"],["/static/media/twitter.0729c42a.svg","0729c42ac6c88ea12311c6989df785d6"],["/static/media/x-square.ddb8f8e8.svg","ddb8f8e88afe396cfd95326183613100"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});