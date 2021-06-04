import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCrahT3sdUP9sV0usTorxuG-nmWPoXtSg0",
    authDomain: "list-app-e49ec.firebaseapp.com",
    databaseURL: "https://list-app-e49ec-default-rtdb.firebaseio.com",
    projectId: "list-app-e49ec",
    storageBucket: "list-app-e49ec.appspot.com",
    messagingSenderId: "481248468744",
    appId: "1:481248468744:web:16632231944629b4e516bd"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore()
