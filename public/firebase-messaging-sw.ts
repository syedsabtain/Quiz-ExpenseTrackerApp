
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
import * as firebase from 'firebase/app';



 
  const firebaseConfig = {
    apiKey: "AIzaSyBsBwBUzpaYuMuNr5-OUUW3fqbSp10tCD4",
    authDomain: "pwa-notification-49a5e.firebaseapp.com",
    databaseURL: "https://pwa-notification-49a5e.firebaseio.com",
    projectId: "pwa-notification-49a5e",
    storageBucket: "pwa-notification-49a5e.appspot.com",
    messagingSenderId: "291214508197",
    appId: "1:291214508197:web:41f9af71994f7d76034d4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
