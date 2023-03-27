'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9fb4ec152421257b8fda08c7f6bfed51",
"assets/assets/fonts/Prompt/Prompt-Light.ttf": "f8636139d00f4914d459e5f004249bc8",
"assets/assets/fonts/Prompt/Prompt-SemiBold.ttf": "3df2cb777e495b195e501ccd99eda0b9",
"assets/assets/fonts/Readex_Pro/ReadexPro-Bold.ttf": "37c649bf3289bf81278cb48f2690bf19",
"assets/assets/fonts/Readex_Pro/ReadexPro-Light.ttf": "ece94e04d3ee14910dcc12fb2299bb2d",
"assets/assets/fonts/Readex_Pro/ReadexPro-Regular.ttf": "af6b38d19c3f91542499f54632bc51fc",
"assets/assets/fonts/Readex_Pro/ReadexPro-SemiBold.ttf": "c6d62b09e3342d2fae4a793d0d9a8406",
"assets/assets/icons/chair.png": "a1b8605e3894abbf46d720356112c53f",
"assets/assets/icons/ic_about_us.svg": "8f0b7b95a050ac41a736b58be486f61e",
"assets/assets/icons/ic_backward.svg": "9d15fe5f9b86e215829e1ddcecbf9249",
"assets/assets/icons/ic_beverage_management.svg": "d0ff79a71181b0b6ad1de28906c303ed",
"assets/assets/icons/ic_bill.svg": "a4bb87a2a314f5ed9a743dbc4db423c5",
"assets/assets/icons/ic_block.svg": "01b0750637a146530dbcadc225173475",
"assets/assets/icons/ic_categories.png": "a41307fedd31ff14858003f622de0004",
"assets/assets/icons/ic_clock.svg": "46c6214c025fe34fcff53e3169ccd4a6",
"assets/assets/icons/ic_contact.svg": "89bdfa27b0fef24b6cf2ce2045d921f2",
"assets/assets/icons/ic_document.svg": "47c5b073eba81e46c3d643c9d55f12aa",
"assets/assets/icons/ic_edit_border.png": "131bfde5bd7350b5811f5d2d435a0122",
"assets/assets/icons/ic_edit_border.svg": "60803bd15920bf6790bf883f35ecd80e",
"assets/assets/icons/ic_ellipse.svg": "96e3b93c2b0ae80127e4881dae402b40",
"assets/assets/icons/ic_email.svg": "dc667da195297d09268303fb79a8eddd",
"assets/assets/icons/ic_facebook.svg": "c0cd138271276bb33a87c2d174015455",
"assets/assets/icons/ic_home.svg": "3b728ec41bea0fba56c656489392c97d",
"assets/assets/icons/ic_instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"assets/assets/icons/ic_kitchen.svg": "7045f3bf73dd8a10a3308187637957b6",
"assets/assets/icons/ic_line.svg": "26678d965b0e8727cf6068599c65f5a2",
"assets/assets/icons/ic_location.svg": "5de4503f4d1644371f9487660fac1f7f",
"assets/assets/icons/ic_location2.svg": "1a424629c7a80a98b174891bf92f9d2c",
"assets/assets/icons/ic_logout.svg": "175780864b216df9fe442fc492489b84",
"assets/assets/icons/ic_menu.svg": "0eca2af31ecdf673f78413aa686fb0b2",
"assets/assets/icons/ic_menu_bar.svg": "24ebbed84dc7d651c8e028f2c39c9c7d",
"assets/assets/icons/ic_menu_setting.svg": "00104c5510815a661959a2bb7a096315",
"assets/assets/icons/ic_personal.svg": "e85c054bba6df1b5363be73ef2467446",
"assets/assets/icons/ic_personalization.svg": "a0cff84d4f7b62c044e3037203d474cb",
"assets/assets/icons/ic_personal_manage.svg": "41c5ee35d64704f909c8394ddfe056af",
"assets/assets/icons/ic_per_setting.png": "d8a11980798693cd2b10627e7de4c065",
"assets/assets/icons/ic_phone.svg": "8c8bda7ca68e037a0fded2365e3fba9a",
"assets/assets/icons/ic_profileDefult.svg": "6945debc6ad3b36d14453ac133528e56",
"assets/assets/icons/ic_promotion.svg": "72f1efe7ddab66d6c5a8c1fab362185c",
"assets/assets/icons/ic_report.svg": "5263ab2d89b7f27c3a26a79c39b27f22",
"assets/assets/icons/ic_res_setting.png": "a147d1fdeba8d26e3f25a5e5f7a13455",
"assets/assets/icons/ic_server.svg": "f8b3a21e4da02178a5ed204df698153b",
"assets/assets/icons/ic_setting.svg": "db2f1fc8338ec63d93ea9ba0509d299d",
"assets/assets/icons/ic_spoon.png": "69cd25338bec7b04bacbe9b7d7e27db1",
"assets/assets/icons/ic_stock.svg": "c45eac4ace1953a8ca501965d88ff907",
"assets/assets/icons/ic_store.svg": "8929376c6f5ef3f04e15bf8fa08e9d5c",
"assets/assets/icons/ic_table.svg": "e8b9435dcfd82ac05a954867828dbe84",
"assets/assets/icons/ic_user_access.svg": "5253827a01fcadcdf3507a35d51a5618",
"assets/assets/icons/star_active.svg": "c47d948bc07097cdf7209a01132f34af",
"assets/assets/icons/star_un_active.svg": "621555ea180e65b9949dcc53c61019da",
"assets/assets/icons/touch.png": "0685667d121997e0474a17cf1abdff28",
"assets/assets/icons/user_access.png": "250e87e56b34fa3c0d0c6233cd4f8c2e",
"assets/assets/icons/work.svg": "cb13965543a76d06e366264bf65fc2ef",
"assets/assets/images/account.png": "60fb3d647bd087ad384cc4582ec29b15",
"assets/assets/images/Background.png": "4281d34a164e5b272d317068b4da539a",
"assets/assets/images/Background_aboutus.png": "4ca07000b0c6d1591648475ce03ffb01",
"assets/assets/images/Background_aboutus_top.png": "4e99774aea6ef13326e6d0e73fddf163",
"assets/assets/images/dudeeLogo.png": "bfa70fcb6305c762f58a631c580cdee5",
"assets/assets/images/homepage_bg.png": "110e2cf2ca06c57a9c976aa3ef1dc905",
"assets/assets/images/logo.svg": "7988ccf72ecfbd40eaebfcb5a0a4d7b2",
"assets/assets/images/LVMC.png": "e895535f60bd587b74a5e1aae2e05135",
"assets/assets/images/no-data-amico.png": "bf0cdd645609c6d892b58fc6158a00c6",
"assets/assets/lottie/loading.json": "9fb0f9aa35da47bf0ad3a9862ae883ff",
"assets/assets/lottie/no-internet-connection.json": "5895b47b1036c4d83d0f827118aedb9a",
"assets/FontManifest.json": "149889b11b70a6526f921b626386aba5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fe6ed57c318c77b4502397e72a883d9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/day_night_time_picker/assets/moon.png": "71137650ab728a466a50fa4fa78fb2b9",
"assets/packages/day_night_time_picker/assets/sun.png": "5fd1657bcb73ce5faafde4183b3dab22",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "219c2fcfa363136bb1a83a7aa543207b",
"/": "219c2fcfa363136bb1a83a7aa543207b",
"main.dart.js": "03bfe0c5b8d2f1897ef5f21afb5b1ded",
"manifest.json": "b2dac4a244ee663427f74f950acb513a",
"version.json": "4616167ce52b936ddb1777956e213306"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
