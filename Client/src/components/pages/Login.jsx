// Login.js
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../../utils/mutations";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const handleLogin = async () => {
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });

      const token = data?.login?.token;

      if (token) {
        // Store the token in local storage
        localStorage.setItem("id_token", token);
        console.log("Login successful");
      } else {
        alert("Failed to login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCreateUser = async () => {
    try {
      const { data } = await addUser({
        variables: { name, password, email },
      });

      const token = data?.addUser?.token;

      if (token) {
        // Redirect or perform actions upon successful account creation
        console.log("Account created successfully");
      } else {
        alert("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("id_token");
    //redirect
    console.log("Logged out");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateUser}>Create Account</button>
      <button onClick={handleLogout}>Logout</button> 
    </div>
  );
}

export default Login;
