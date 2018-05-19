self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open('static').then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    if (response.status == 404) {
                        return fetch('404.html')
                    }
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});