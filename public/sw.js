importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  self.skipWaiting();
  workbox.core.clientsClaim();

  // Precaching engagement.js file
  workbox.precaching.precacheAndRoute([
    { url: '/images/engagement/engagement.js', revision: null },
    { url: '/', revision: null }
  ]);

  // Fetch the engagement.js file and cache the images listed in it
  self.addEventListener('install', event => {
    event.waitUntil(
      fetch('/images/engagement/engagement.js')
        .then(response => response.text())
        .then(text => {
          // Evaluate the script to get the engagementPhotos array
          const engagementPhotos = (new Function(text + '; return engagementPhotos;'))();

          const urlsToCache = engagementPhotos.map(photo => photo.src);
          return caches.open('v1').then(cache => {
            return cache.addAll(urlsToCache);
          });
        })
    );
  });

  // Cache strategies for different resources
  workbox.routing.registerRoute(
    new RegExp('/images/engagement/.*'),
    new workbox.strategies.CacheFirst({
      cacheName: 'engagement-images',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50, // Adjust as necessary
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'document',
    new workbox.strategies.NetworkFirst({
      cacheName: 'documents',
    })
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
