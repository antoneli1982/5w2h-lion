const CACHE_NAME = "5w2h-lion-v1";

const urlsToCache = [
  "/5w2h-lion/",
  "/5w2h-lion/index.html",
  "/5w2h-lion/icone-192.png",
  "/5w2h-lion/icone-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
