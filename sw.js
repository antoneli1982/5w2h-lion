const CACHE_NAME = 'v19';
const ASSETS = ['./manifest.json'];
// index.html NUNCA é cacheado — sempre busca da rede para garantir código atualizado
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // index.html e raiz: sempre rede primeiro, sem cache
  if (url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }
  // Firebase e outros: rede primeiro
  e.respondWith(fetch(e.request).then(r => {
    const rc = r.clone();
    caches.open(CACHE_NAME).then(c => c.put(e.request, rc));
    return r;
  }).catch(() => caches.match(e.request)));
});
