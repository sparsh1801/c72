import * as firebase from 'firebase';
require ('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBX50vcO43sKQs19x9CJES8z3WHGeuHoq8",
    authDomain: "wily1-b91b5.firebaseapp.com",
    databaseURL: "https://wily1-b91b5.firebaseio.com",
    projectId: "wily1-b91b5",
    storageBucket: "wily1-b91b5.appspot.com",
    messagingSenderId: "353472047365",
    appId: "1:353472047365:web:681ad90b3814ae57fdaf6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();