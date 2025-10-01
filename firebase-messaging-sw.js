// This file must be in the public root of your site.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// IMPORTANT:
// The Firebase config object must be here and match the one in your app.
const firebaseConfig = {
  apiKey: "AIzaSyCQXuo4YuJYquMLr4-T1d2oyADbncg27eA",
  authDomain: "shvan-tech-app.firebaseapp.com",
  databaseURL: "https://shvan-tech-app-default-rtdb.firebaseio.com",
  projectId: "shvan-tech-app",
  storageBucket: "shvan-tech-app.firebasestorage.app",
  messagingSenderId: "549568845634",
  appId: "1:549568845634:web:8a1e5e15a083335622dadb",
  measurementId: "G-W0GNNPFE6T"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // You can add an icon here, e.g., icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
