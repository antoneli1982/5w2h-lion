const CACHE_NAME = "5w2h-lion-v1";

const urlsToCache = [
  "/5w2h-lion/",
  "/5w2h-lion/index.html",
  "/5w2h-lion/manifest.json",
  "/5w2h-lion/icone-192.png",
  "/5w2h-lion/icone-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      return (
        cached ||
        fetch(event.request).catch(() => caches.match("/5w2h-lion/index.html"))
      );
    })
  );
});
