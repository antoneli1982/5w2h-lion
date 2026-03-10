const CACHE_NAME = 'v18';
const CACHE_TS = '1773211200';
const ASSETS = ['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const rc=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,rc));return r;}).catch(()=>caches.match(e.request)));});
