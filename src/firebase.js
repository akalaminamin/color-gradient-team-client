import {initializeApp} from 'firebase/app';
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

const app = initializeApp(firebaseConfig);

export default app;

