  import * as firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  import 'firebase/storage';
  
  
  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
 export const firebaseConfig = {
    apiKey: "AIzaSyB3ruzBQvh-OF_l0VBHqutIr0vtRQ9Db4w",
    authDomain: "phonobase-a40a2.firebaseapp.com",
    databaseURL: "https://phonobase-a40a2.firebaseio.com",
    projectId: "phonobase-a40a2",
    storageBucket: "phonobase-a40a2.appspot.com",
    messagingSenderId: "217065699485",
    appId: "1:217065699485:web:e5b5b1cb24c2247fd63c74",
    measurementId: "G-E0PMB4ZXLZ"
  };

  firebase.initializeApp(firebaseConfig)
  
  export const storage=firebase.storage();

  export default firebase