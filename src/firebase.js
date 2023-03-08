
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCswlmQb1NJUgbAOthG23315W4pwUqRrw0",
  authDomain: "school-project-7eb2c.firebaseapp.com",
  projectId: "school-project-7eb2c",
  storageBucket: "school-project-7eb2c.appspot.com",
  messagingSenderId: "922561304428",
  appId: "1:922561304428:web:9446467735bb12ba540549"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
