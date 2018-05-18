self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            cache.addAll([
                '/restaurant-reviews/',
                'data/restaurants.json',
                'js/main.js',
                'js/dbhelper.js',
                'css/styles.css',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                // 'img/placeholder.jpg',
                // '404.html'
            ])
        })
    );
});
self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(rsp => {
    return rsp || fetch(e.request).then(rsp => {
            if (rsp.status == 404) {
                return fetch('404.html')
            }
            return rsp;
        });
    }));
});