import firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCZAPaNFwF634qCj7urb08B2DxcAZeiw5s",
  authDomain: "text-cruncher-4b993.firebaseapp.com",
  databaseURL: "https://text-cruncher-4b993.firebaseio.com",
  projectId: "text-cruncher-4b993",
  storageBucket: "text-cruncher-4b993.appspot.com",
  messagingSenderId: "800609693539",
  appId: "1:800609693539:web:75703be73ba2415b66ad56",
  measurementId: "G-S09767YR7B"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;