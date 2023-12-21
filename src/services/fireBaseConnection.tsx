
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCuwni55kFgfGTyyS23asRXMNUmUbMlvLo",
  authDomain: "reactlinks-8b18f.firebaseapp.com",
  projectId: "reactlinks-8b18f",
  storageBucket: "reactlinks-8b18f.appspot.com",
  messagingSenderId: "284882978881",
  appId: "1:284882978881:web:e3d65d127fd907008c5ec0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export{auth, db}