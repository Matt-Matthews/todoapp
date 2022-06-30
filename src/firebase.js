import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
     apiKey: "AIzaSyA4izSNaowV_xCcKr6jyz_Jl55udCAM8ZY",
  authDomain: "todo-db015.firebaseapp.com",
  projectId: "todo-db015",
  storageBucket: "todo-db015.appspot.com",
  messagingSenderId: "85612137237",
  appId: "1:85612137237:web:bc1ba7ef4dd6140433b71c"
  };
  

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)