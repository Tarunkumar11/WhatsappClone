// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDihHG-YyGd8QtYowb-chv1yWutlOeTLLE",
    authDomain: "whatsappclone-tarun.firebaseapp.com",
    projectId: "whatsappclone-tarun",
    storageBucket: "whatsappclone-tarun.appspot.com",
    messagingSenderId: "87549822756",
    appId: "1:87549822756:web:6a4487dcb440dd652355b1",
    measurementId: "G-J9ZXHYY6KR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;