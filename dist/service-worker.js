/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.69b6f57.css","c81a8718ed7d58dbc231044a7979f2d1"],["/static/css/app.69b6f57.css","66a1f6bce722028526031b640e30bc99"],["/static/img/element-icons.6f0a763.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/static/img/fontawesome-webfont.674f50d.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/img/fontawesome-webfont.912ec66.svg","912ec66d7572ff821749319396470bde"],["/static/img/fontawesome-webfont.af7ae50.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/img/fontawesome-webfont.b06871f.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/img/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["/static/js/0.475c6a0.js","46c6aad7d396daaf0867014ec0b2c21b"],["/static/js/1.045105d.js","15094826004a10ce5517ca93cbfe40ba"],["/static/js/10.e145330.js","75d8975c88b2196a898f592c510ce6b9"],["/static/js/11.863ade7.js","f5634656331530f379804017acbbdff0"],["/static/js/12.c450ae3.js","1c3a7973ec59c638489e05e1c4a88d58"],["/static/js/13.06dc22c.js","34c144f456613a536e75d21b11c4c09a"],["/static/js/14.07dd831.js","8f18bde3f4c1a4e9d2bf49904f562189"],["/static/js/15.a462923.js","e08060c90a1497f96ff701eff343ac21"],["/static/js/16.a8fec6a.js","341b715342082b8fde74c02d88feefa0"],["/static/js/17.8ba7b8e.js","359f519a8bf74eacf7432c6b46b825bc"],["/static/js/18.9697894.js","f6ec560ac7b1f06a36f238def0e6f48a"],["/static/js/19.055ae1b.js","4191505f0f4937192600b1e6853b7153"],["/static/js/2.f0bf588.js","f270dc76e5857bb0a0e6d5bd99b73455"],["/static/js/20.5823e42.js","2a9a31cddf0c5c13fb24526a966cb374"],["/static/js/21.62d46ad.js","d6ab1feaa712f33006e7d0109bc71495"],["/static/js/22.6e2e591.js","9bd466a6c2c91cde0f983f291f75fe5d"],["/static/js/23.9249ea9.js","f45544f4108deabe409b253493ae4da2"],["/static/js/24.6740fdd.js","2e180f3476b7bf06ba1c31c88b477698"],["/static/js/25.d518a7e.js","7d3fd1b9ef70826b0ee093a0fa066b35"],["/static/js/26.e392ded.js","a4dfbcd7274e33b7150d4e912fa67da5"],["/static/js/27.b5d4f42.js","1d4871a025d0e032764fa19629122928"],["/static/js/28.b2b8c53.js","ae6b5b8822787d4e249303828b83312e"],["/static/js/29.90c7258.js","d54a9d2c69dac4b6ba9a22a79a61688e"],["/static/js/3.038ab62.js","21f577314467876c57aa7d93dcac597b"],["/static/js/30.473e3ba.js","dfb9adb70ad65da784bdb5ee75166de9"],["/static/js/31.943dfb9.js","3da59715e92b5c2585f13b948835d2de"],["/static/js/32.6881a06.js","4af2617422d2144861888f92e517f315"],["/static/js/33.5e6a366.js","5566d38e57e2594c6c0d102b5e41a995"],["/static/js/34.304f909.js","1d877dc828f55f19c84a8b8a7d300bb1"],["/static/js/35.06e29eb.js","d5ada95255aea66468a960df0ca0b421"],["/static/js/36.17632cc.js","79efbbdfb5cd1d0d227466757fe4b6dc"],["/static/js/37.053572c.js","9acd68820813e647a4c71c629e0dbdb0"],["/static/js/38.9755b4b.js","5a83d7e2e17456291dd343cb04ff8342"],["/static/js/39.8b0cc9b.js","743594dc40de22efc2986db291a8a248"],["/static/js/4.f1bc32d.js","bd810607e1d5b07ddd69417921ee75be"],["/static/js/40.2aca0a3.js","6d5cc4f67e647a4a19e0a516e43f4c59"],["/static/js/41.e1f2ceb.js","d46d3564803bb7a1ac6530c1ed542f0a"],["/static/js/42.ec6658b.js","8b842fe999cd0a2927812747aa954d67"],["/static/js/43.5b62714.js","76a3770def0e2a438706ebe075b6f108"],["/static/js/44.c00545b.js","78eb0831746b8fb3f4f7490a10b4e9df"],["/static/js/45.43b81d2.js","4af86fd010df18fe636bc272474a9d64"],["/static/js/46.bbac7a9.js","822db8a839174d1659021a96e92b73c4"],["/static/js/47.3915f10.js","68bf0438691d0a128695830d98888498"],["/static/js/48.8b46dcd.js","55d73b9dffd71ec49c9447145981fd22"],["/static/js/49.36f17da.js","217e1a74558dc30aa09731ea2510951c"],["/static/js/5.2141823.js","de36a83ad722934b3669e6bc972859f8"],["/static/js/50.96ced7e.js","a36888b5f6918c89302ea02eb03348dd"],["/static/js/51.b732e8c.js","270df231278470f0fc93caefafcd1245"],["/static/js/52.b8faf72.js","8653085577c988681949daac829db5b1"],["/static/js/53.943581d.js","fbafd905867a29593110337ef6514179"],["/static/js/54.0bc078f.js","4082978e1ce5d85e8d1fbf0b4d72ff81"],["/static/js/6.3ab0eef.js","db1ad38d112b260224c967e30496109c"],["/static/js/7.1579967.js","426a9cd8e07ab04b00740227141091d1"],["/static/js/8.1d01e4e.js","f8a057dce0e5f11bd631b55b53a04d7b"],["/static/js/9.4663c8c.js","a590aced60656edd67057d78ad0a959f"],["/static/js/admin.4833c59.js","c42f77e26fdd4f490a7fe3a1f57f44ec"],["/static/js/app.80c75c4.js","00ab5a3f1bde72c0c76039bc886dc1e5"],["/static/js/manifest.5f0c864.js","c02f4a76d44b406836fdeefb4b9c9260"],["/static/js/vendor.dd13a95.js","75355f01db327848e1ae9f66571d2830"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







