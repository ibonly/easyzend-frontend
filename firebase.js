import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage, onBackgroundMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu3Sydx-oqviuQuOzd8367IiPFuv8U4f4",
  authDomain: "naija-vote.firebaseapp.com",
  databaseURL: "https://naija-vote.firebaseio.com",
  projectId: "naija-vote",
  storageBucket: "naija-vote.firebasestorage.app",
  messagingSenderId: "199474083183",
  appId: "1:199474083183:web:683a17f71009513ed8a49a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission to send notifications
Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');

    // Get the token
    getToken(messaging, { vapidKey: "BPJ1gJ9qaXNUfoHafXVlesnzg77Rs0pFZq8CP9i_2nZMMoZaJLB__LZYAvfLnAM7Dz68knc0qaJ6g3NLNXwt5Hs" }).then((currentToken) => {
      if (currentToken) {
        console.log('FCM Token:', currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  } else {
    console.log('Unable to get permission to notify.');
  }
}).catch((err) => {
  console.log('An error occurred while requesting notification permission. ', err);
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});