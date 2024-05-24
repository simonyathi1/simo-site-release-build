'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ad639ec2e1fa9842554bd0f7072de27b",
"assets/AssetManifest.bin.json": "e2628dcf1d7e9f7579f79d20da6daff3",
"assets/AssetManifest.json": "7d57b48fd2d01f133e5cab8e69534891",
"assets/assets/fonts/Crimson_Text/CrimsonText-Bold.ttf": "92e8dfc1d9c8baed40c860318b3c5186",
"assets/assets/fonts/Crimson_Text/CrimsonText-Regular.ttf": "c8eaeb3ab46e610c4fa4a623ee8d282f",
"assets/assets/fonts/Crimson_Text/CrimsonText-SemiBold.ttf": "34b92308cc1867957b375e5aa05d005e",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/assets/images/companies/absa.png": "5d4b24a8a7225a7fdff746f0234edea3",
"assets/assets/images/companies/discovery.png": "23041dad0fcfcc7406ff4861393a7053",
"assets/assets/images/companies/dvt.png": "7f355b6b5d2a88da16a62a4dee65ed18",
"assets/assets/images/companies/fidelitech-logo.png": "47c24ee77085ef4fc5939bd210600045",
"assets/assets/images/companies/mukuru-big.png": "a0b38fda4ac6f1d08aed2e2543617cec",
"assets/assets/images/companies/mukuru.png": "080214ee4ca31a33e84494601978e0c0",
"assets/assets/images/companies/reverside-big.png": "02a16e473f11b4fa8c8d1e61b6057f40",
"assets/assets/images/companies/reverside.png": "02786f3fe6c26773abd4d0480ac02efe",
"assets/assets/images/companies/standard-bank-logo.png": "a43dc548715c6a41f3cdbbe96f0024cd",
"assets/assets/images/companies/vitality-logo.png": "a876d30af7d40748a84732b80ad8de19",
"assets/assets/images/contact-card.png": "23d4bd6fb91800a4dfa078955f273f0e",
"assets/assets/images/icons/icons8-at-sign-96.png": "09c1ad709d138b5a8e0fba98734a5a25",
"assets/assets/images/icons/icons8-facebook-96.png": "c514091ebce6ddcc5c629eac2de760f4",
"assets/assets/images/icons/icons8-google-96.png": "2892cd76d5e83ef784811ce868b3fddd",
"assets/assets/images/icons/icons8-twitter-96.png": "e4c8aadc967c4ae06f630b3c486b88d6",
"assets/assets/images/logo/android-logo-selected.png": "05eb1eff72a56a17dea26091dbb1fdd3",
"assets/assets/images/logo/Architecture.png": "1ca2708c5d3a9804c2a2635c78c0575a",
"assets/assets/images/logo/disco2.png": "64731ce4885c9cf7cadc0784428a7614",
"assets/assets/images/logo/flutter.png": "c3700675225b7640f05d6f8a8fd0383b",
"assets/assets/images/logo/Java-logo.png": "711f654d966e29da576399cc8d873a9e",
"assets/assets/images/logo/kotlin-logo.png": "0f6a690b27200af9bdd1657708d20cf8",
"assets/assets/images/logo/node-js.png": "25e9bd31085fa27ab1cc0b0ec2cf7f96",
"assets/assets/images/logo/pattern1.png": "72d3986a53c744e4fe72bc0cbdcfb7a3",
"assets/assets/images/logo/pattern2.png": "c4ff57f9820500e20f2e69e453c99b1b",
"assets/assets/images/logo/pattern3.png": "79f077b7400570ed4a488f5b56d4f8c9",
"assets/assets/images/logo/pattern4.png": "c0fa0c8fd205e3d1ea00a2c083a4a9ee",
"assets/assets/images/logo/pattern5.png": "1eabbf31d498be027cc1a2bcc21ddcc0",
"assets/assets/images/logo/pattern6.png": "ba64ab415b54cb6ed1b4288d1c80a68f",
"assets/assets/images/logo/pattern7.png": "0dc5bf10eaf2c32056e5496aea9d43a0",
"assets/assets/images/logo/pdf-logo.png": "e71ca9ac01ed959c3bf1bf8451b817bf",
"assets/assets/images/logo/S-logo-full.png": "2ed730ab39a88cb8dad268fb04d8dd6d",
"assets/assets/images/logo/s-logo-no-bg-crop.png": "17181f5254eb0f16215e625b43309f5b",
"assets/assets/images/logo/S-no-border-small.png": "e75992cd9091e7a1a7b0b494b3a03681",
"assets/assets/images/logo/S-no-border.png": "cd45bc5c949433568f0b45340990c39d",
"assets/assets/images/logo/under-construction-worker.png": "f32e6dfabcdd5e47de3a8241ac7479af",
"assets/assets/images/logo/under-construction.png": "cf25df5d40f1c07ec2b3a862820a12cc",
"assets/assets/images/Simo.jpeg": "0c80ca1cd6877284215907e4f33dbdc3",
"assets/assets/pdf/matric_certificate.pdf": "458e4c8fcf80a89f416fcec5577d2a23",
"assets/assets/pdf/onesimo_nyathi_cv_2023.pdf": "8efc07a9bed6b379198928f260fc22f4",
"assets/FontManifest.json": "b0aa3581d90f81755a75674a151a283d",
"assets/fonts/MaterialIcons-Regular.otf": "9855ba3f92bc854c40b24e3d321e2248",
"assets/NOTICES": "ca2cbc3e8a494975bff099d3494c9c4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14fc5081d86332e4cb5f313b52fbc331",
"/": "14fc5081d86332e4cb5f313b52fbc331",
"main.dart.js": "9573b975572225da14168b7f8304110c",
"manifest.json": "5713d50edf2ec29e3336e15796ee2a85",
"s-logo-no-bg-crop.png": "17181f5254eb0f16215e625b43309f5b",
"version.json": "27eb0fd6831ecb701ec950ff777f7271"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
