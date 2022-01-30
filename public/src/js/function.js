if('serviceWorker' in navigator) {
    navigator.serviceWorker
      // Register the path to the service worker file
      .register('')
      .then(function() { console.log("Service Worker Registered"); });
  }