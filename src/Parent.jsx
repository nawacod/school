import { collection, getDocs, query,onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './parent.css'
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const Parent = () => {
  const [data, setData] = useState([])
  const [code, setCode] = useState('')
  const [show, setShow] = useState("")

 const navigate = useNavigate()
  
  
  const GetData = async () => {
          onSnapshot(collection(db, "users"), (snapshot) =>
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))

   };
  useEffect(() => {
    GetData();
   
    
     
  }, []);
  
  const handle = (e, event) => {



  }

  return (
<div className='ParentContain'>
<div className='Skinny'>
      <div className='search'>
            <p>search your name</p>
             
          <input  placeholder='name'  className='tyme' value={show} onChange={(e) => {
              setShow(e.target.value)
            
          }}></input>

      </div>
      <div className='ItemsContain'>{data.filter((val) => {
        if (show === "") {
          return val
          
        }
        else if (
          val.name.toLowerCase().includes(show)
          
        ) {
          return val
        }
      }).map((i) => {
        return <div class="popup">
          
          <form class="formm">
        
   
            <div class="note">
              <label class="title">{i.name}</label>
              <label htmlFor="">please enter your code that was sent with your email</label>
            </div>
            <input placeholder="Enter your code" onChange={(e) => {
              setCode(e.target.value
              )
            }} title="Enter your e-mail" name="email" type="email" class="input_field" />
            <button onClick={(e) => {
              if (code == i.password) {
                navigate(`/result/${i.id}`)
              }
              else {
                alert("this code ain't right")
              }
          
            }} class="submit">Submit</button>
          </form>
        </div>
      })}</div>
    
    
    </div >
</div>
  
   )}


      
    
    
  



export default Parent