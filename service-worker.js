"use strict";var precacheConfig=[["/index.html","14bc8289c1a4830e99228902da01b4aa"],["/static/css/main.b7e7c292.css","b7e7c2925789a88582841eef6fde3a43"],["/static/js/main.224b700d.js","40d58808099156357321ef19d749ff01"],["/static/media/500px.e3046539.svg","e3046539308ff5570e6f10ac678da7d1"],["/static/media/SourceSansPro-Bold.otf.0d3b9a43.woff2","0d3b9a43eda8c6ebe926cd9740ec78a4"],["/static/media/SourceSansPro-It.otf.dc350a13.woff2","dc350a1320c8c455fce22a68938ce05b"],["/static/media/SourceSansPro-Regular.otf.0448fda3.woff2","0448fda3606e6dc571f763223e78861a"],["/static/media/box.bfde84f9.svg","bfde84f9afae453aeffd4f63359461cc"],["/static/media/calendar.b3d6e64c.svg","b3d6e64c582711b7961aee4c427535dd"],["/static/media/chevron-left.5727f869.svg","5727f869509c87f4d25c2225f0968573"],["/static/media/chevron-right.9c59704b.svg","9c59704b1de34c9fbb54c100b907ac85"],["/static/media/download.ce2002cf.svg","ce2002cf2b1ff34be6c693d4bc3f025d"],["/static/media/external-link.ac05cd4f.svg","ac05cd4fcb0cd58ddb90c1cecf80f77e"],["/static/media/eye.62517b9b.svg","62517b9ba0aa6eb7d9a48cd982b9fa77"],["/static/media/github.f5a069d2.svg","f5a069d24c7855d24188c14f570b6a57"],["/static/media/heart.502189ae.svg","502189aef3b96acbcddedbb54a043638"],["/static/media/home.55644be0.svg","55644be0d4a9382b8f1b58830cd536c6"],["/static/media/linkedin.48a2133d.svg","48a2133dd5c34ad46cc6ab6ff06c03ec"],["/static/media/mail.20e8982e.svg","20e8982ec7e03638afe27f5c3e897681"],["/static/media/map-pin.b2f804bd.svg","b2f804bda31dee415fc2b1ff7ba9315f"],["/static/media/printer.cb409233.svg","cb4092339e30e3b581db1c092e10bc20"],["/static/media/stack-overflow.1efb7f59.svg","1efb7f590e64fb60cc14c0822fa30099"],["/static/media/twitter.0729c42a.svg","0729c42ac6c88ea12311c6989df785d6"],["/static/media/user.ed52f187.svg","ed52f187b2c4aad7fd02765c9cdc2f92"],["/static/media/x-square.ddb8f8e8.svg","ddb8f8e88afe396cfd95326183613100"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});