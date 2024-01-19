importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDlLdo6xZpC1vb4GgFzEUdiq8cfssw8jQ8",
  authDomain: "hydro-alert-ff86b.firebaseapp.com",
  projectId: "hydro-alert-ff86b",
  storageBucket: "hydro-alert-ff86b.appspot.com",
  messagingSenderId: "707957406381",
  appId: "1:707957406381:web:40e81e2e1c878df8ede424",
});

const messaging = firebase.messaging();
