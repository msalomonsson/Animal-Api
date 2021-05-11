import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAx6ZbddwwuXRS15pGtlfmVKdVd-agGlHE",
  authDomain: "api-course-ad15a.firebaseapp.com",
  projectId: "api-course-ad15a",
  storageBucket: "api-course-ad15a.appspot.com",
  messagingSenderId: "880756712756",
  appId: "1:880756712756:web:dbdf20a69bcefd96007161",
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
