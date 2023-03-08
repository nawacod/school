import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firebase";

function App() {

   const GetData = async () => {
   const q = query(collection(db, "users"));
const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
       console.log(doc.data());
      
     });
   };
   useEffect(() => {
     GetData();
   }, []);
  return (
    <>
    
    
    </>
  );
}

export default App;
