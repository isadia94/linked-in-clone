import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDQOC6eCCXeafZjToVKd30YaziqrCykd0",
  authDomain: "linkedin-clone-bl.firebaseapp.com",
  projectId: "linkedin-clone-bl",
  storageBucket: "linkedin-clone-bl.appspot.com",
  messagingSenderId: "840788538551",
  appId: "1:840788538551:web:05b4d90d4e9fb653e68932",
  measurementId: "G-77F0VVSQ8Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
