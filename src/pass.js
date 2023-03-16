import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pass.css"
const Pass = () => {
  const [password, setPassword] = useState();
  const code = "1292";
  const navigate = useNavigate();

  return (
    <form class="formms">
      <span class="titlee">Hey Teachers.</span>
      <p class="description">
        Enter the code provided by the admins.
      </p>
      <div>
              <input value={password} placeholder="Enter Your code" id="email-address" onChange={(e) => {
                  setPassword(e.target.value)
                  
        }} />
        <button
          onClick={(e) => {
            if (password == code) {
              navigate("/admin");
            } else {
              alert("the password ain't right ");
            }
          }}
          
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Pass;
