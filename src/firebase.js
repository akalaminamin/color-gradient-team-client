import firebase from 'firebase/compat/app';
import "firebase/auth";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9T-mjBDd5HDHbIR3uuZ4TuRha-n74yF0",
  authDomain: "color-gradient.firebaseapp.com",
  projectId: "color-gradient",
  storageBucket: "color-gradient.appspot.com",
  messagingSenderId: "1072253469075",
  appId: "1:1072253469075:web:324456b9212da944bee866",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
