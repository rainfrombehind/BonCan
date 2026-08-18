/* BonCan — Service Worker bàsic per PWA instal·lable */
const CACHE_NAME = 'boncan-cache-v1';
const PRECACHE_URLS = [
    './',
    './index.html',
    './manifest.json',
    './styles.css',
    './script.js',
    './assets/brand/AppIcon.png',
    './assets/brand/LogoSplash.png',
    './assets/brand/MainButton.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {}))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((k) => k !== CACHE_NAME)
                    .map((k) => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    if (url.origin !== location.origin) return;

    const isStaticAsset = /\.(png|jpg|jpeg|svg|gif|webp|ico|css|js|woff2?|ttf|json)$/i.test(url.pathname);
    const isHtmlNav = req.mode === 'navigate' || (req.destination === 'document' && req.headers.get('accept')?.includes('text/html'));

    if (isStaticAsset && !isHtmlNav) {
        // Cache first per assets estàtics
        event.respondWith(
            caches.match(req).then((cached) => {
                if (cached) return cached;
                return fetch(req).then((resp) => {
                    if (resp && resp.ok && resp.status === 200) {
                        const copy = resp.clone();
                        caches.open(CACHE_NAME).then((c) => c.put(req, copy).catch(() => {}));
                    }
                    return resp;
                }).catch(() => cached);
            })
        );
        return;
    }

    // Network first per HTML / navegació / la resta, fallback a cache si offline
    event.respondWith(
        fetch(req).then((resp) => {
            if (resp && resp.ok && resp.status === 200 && req.mode !== 'navigate') {
                const copy = resp.clone();
                caches.open(CACHE_NAME).then((c) => c.put(req, copy).catch(() => {}));
            }
            return resp;
        }).catch(() =>
            caches.match(req).then((cached) => {
                if (cached) return cached;
                if (isHtmlNav) return caches.match('./index.html');
            })
        )
    );
});
