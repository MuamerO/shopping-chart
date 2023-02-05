import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBj_26r2NBDgdbPtYr8B-wlHQl1HhgMT_Y",
  authDomain: "e-comercedb.firebaseapp.com",
  projectId: "e-comercedb",
  storageBucket: "e-comercedb.appspot.com",
  messagingSenderId: "144329353605",
  appId: "1:144329353605:web:81cbf1875d729968ea7cec",
  measurementId: "G-MLTS003W2B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
