import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './home.css'

const Home = () => {
  const [code,setCode]=useState('')
  const password = (19129)

  const navigate = useNavigate()



  
  return (
    <>
      <div className="HomeContain">
        <nav>
          <ul>
            <li class="logo">ETHIO-PARENTS</li>
          </ul>
          <ul>
            <li>Home</li>

            <li>Creators</li>
          </ul>
        </nav>
        <section>
          <div class="contain">
            <div class="Hometitle">
              <h1>Welcome</h1>
              <h1>To Ethio Parent's</h1>
              <h1>School Website</h1>
              <p>This website helps you get your result staright</p>
              <p>from home and its highly secured so no one other</p>
              <p>than you can see your result.</p>
            </div>

            <div>
              <Link to="/pass">
                <button class="button">Teacher</button>
              </Link>
              <Link to="parent">
                <button class="button">Parent</button>
              </Link>
              <Link to="announcment">
                <button class="button">Announcment</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home