import firebase from 'firebase'

import 'firebase/firestore' 

var firebaseConfig = {
    apiKey: "AIzaSyD1OngLITA_6ZjJD67pseTQ0Wok2Jjzgjk",
    authDomain: "react-firebase-1-6064c.firebaseapp.com",
    projectId: "react-firebase-1-6064c",
    storageBucket: "react-firebase-1-6064c.appspot.com",
    messagingSenderId: "284849508891",
    appId: "1:284849508891:web:5124ebf9fd0e704e345ebe",
    measurementId: "G-8K7QFTGN8P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore();

  export default {
      firebase,
      db,
  }