const cacheName='Angora-v8'
// Fetch Assets Static
// It's better not to remove these static assets 
// APP Shell -> Main files which won't change like css files and js files
const assets=[
    '/',
    '/index.html',
    'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap',
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
    '/css/bootstrap.min.css',
    '/css/all.min.css',
    '/css/style-prefix-min.css',
    '/js/jquery-3.5.1.slim.min.js',
    '/js/jquery-3.6.0.min.js',
    '/js/popper.min.js',
    '/js/bootstrap.min.js',
    '/js/main.js',
]

self.addEventListener("install", (installEvent) =>
installEvent.waitUntil(
    caches.open(cacheName).then(cache=>{
        cache.addAll(assets).then().catch()
     }).catch(err=>console.log(err))
)
);

self.addEventListener("activate", (activateEvent) =>{
    activateEvent.waitUntil(
        caches.keys().then(keys=>
             Promise.all(keys.filter(key=>key!==cacheName).map(key=>caches.delete(key)))
        )
    )}
);

self.addEventListener("fetch", (fetchEvent) =>{
  fetchEvent.respondWith(
    // Fetch Assets Static
    // caches.match(fetchEvent.request).then(res=>res || fetch(fetchEvent.request))

    // Save Assets And retrieve them dynamic
    caches.match(fetchEvent.request).then(res=>res || fetch(fetchEvent.request).then(fetchResult=>{
      return caches.open(cacheName).then(cache=>{
        cache.put(fetchEvent.request,fetchResult.clone())
        return fetchResult
      })
    }))

  )
}
);
