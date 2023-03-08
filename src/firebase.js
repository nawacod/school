
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDz19q7A01fkhi2t997EzXVSTts6P7FFDk",
  authDomain: "chat-9ad7f.firebaseapp.com",
  projectId: "chat-9ad7f",
  storageBucket: "chat-9ad7f.appspot.com",
  messagingSenderId: "1094285626246",
  appId: "1:1094285626246:web:0d9c18de05ca3d77f97a07",
  measurementId: "G-NWQ8FJTRR3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
