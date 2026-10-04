// ChaletAPP Service Worker v1
const CACHE = 'chaletapp-v1';
const ASSETS = [
  '/ChaletAPP/',
  '/ChaletAPP/index.html',
  '/ChaletAPP/icon-192.png',
  '/ChaletAPP/icon-512.png',
  '/ChaletAPP/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Para Firebase y APIs externas: siempre red
  if (e.request.url.includes('firebase') ||
      e.request.url.includes('googleapis') ||
      e.request.url.includes('dolarapi') ||
      e.request.url.includes('argentinadatos') ||
      e.request.url.includes('fonts.g') ||
      e.request.url.includes('cdnjs') ||
      e.request.url.includes('gstatic')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', {status: 503})));
    return;
  }
  // Para assets propios: cache first, fallback a red
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
