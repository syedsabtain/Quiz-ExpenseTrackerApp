
import * as firebase from 'firebase/app'; 
import 'firebase/messaging'






const firebaseConfig = {
  apiKey: "AIzaSyBsBwBUzpaYuMuNr5-OUUW3fqbSp10tCD4",
  authDomain: "pwa-notification-49a5e.firebaseapp.com",
  projectId: "pwa-notification-49a5e",
  messagingSenderId: "291214508197",
  appId: "1:291214508197:web:41f9af71994f7d76034d4c"
  };
 
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
  

  export default firebase;