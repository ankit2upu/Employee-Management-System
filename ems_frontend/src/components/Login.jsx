import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    if(username === "admin" &&
       password === "Ankit@2345") {

      localStorage.setItem("isLoggedIn","true");

      window.location.href="/employees";
    }
    else{
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-10  "
    style={{marginTop:"100px"}}
    >

      <h2>Admin Login</h2>

      <input
        className="form-control mb-3"
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;