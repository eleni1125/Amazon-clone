// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt1MCjSjXcew0xwaMssrSU5NfzixR1pVU",
  authDomain: "my-837c3.firebaseapp.com",
  projectId: "my-837c3",
  storageBucket: "my-837c3.appspot.com",
  messagingSenderId: "832169482405",
  appId: "1:832169482405:web:c08b3781e7ad590101154c",
  measurementId: "G-WFEDYEX9CK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
