import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  console.log("entered to login Page....");

  const handleLoginButton = (event) => {
      const email = document.getElementById("emailInput").value;
      const pass = document.getElementById("passInput").value;
      
      if(email.trim() === "" ) {
        alert("Email Required!")
      } 
      if(pass.trim() === "") {
        alert("Password Required!")
      }

      if( email  === "saksho@gmail.com" && pass === "Sakshi@123" ) {
        localStorage.setItem("Email", email);
        console.log("Email is stored..")
        
        navigate("/");
      } 
  }


  return (
    <section
      className="container bg-light mt-5 p-4 justify-content-center align-items-center"
      id="loginPage"
    >
    
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="passInput"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="d-grid gap-2">
        <button className="btn mt-5 text-center" type="button" onClick={handleLoginButton}>
          Login In
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
