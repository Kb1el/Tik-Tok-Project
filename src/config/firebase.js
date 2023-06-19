import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDt4SdQ29gMnctFSyNJXm_fAiAfBwRS2Nc",
  authDomain: "tiktok---jornada-cb7f4.firebaseapp.com",
  projectId: "tiktok---jornada-cb7f4",
  storageBucket: "tiktok---jornada-cb7f4.appspot.com",
  messagingSenderId: "331762787356",
  appId: "1:331762787356:web:9ae9cb3929c08dd3ca2bd9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
