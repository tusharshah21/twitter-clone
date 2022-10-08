// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDS2-g1TioGHPFhQhUq1IUioAWbfB3CqAc",
    authDomain: "twitter-clone-97c99.firebaseapp.com",
    projectId: "twitter-clone-97c99",
    storageBucket: "twitter-clone-97c99.appspot.com",
    messagingSenderId: "405714106604",
    appId: "1:405714106604:web:08d2901f12051f7ada8dc9",
    measurementId: "G-SCSZZ9K0H3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;