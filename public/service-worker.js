const CACHE_NAME = "static-v1";
const DATA_CACHE_NAME = "data-v1";

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/service-worker.js',
  '/index.js',
  '/styles.css',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/transaction"))
  );

  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAfll(FILES_TO_CACHE))
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return PromiseRejectionEvent.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});
