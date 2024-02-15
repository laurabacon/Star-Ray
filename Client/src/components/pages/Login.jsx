import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../../utils/mutations";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const redirectToShop = () => {
    window.location.href = "/shop";
  };

  const handleLogin = async () => {
    try {
      const { data } = await loginUser({
        variables: { email: loginEmail, password: loginPassword },
      });

      const token = data?.login?.token;

      if (token) {
        // Store the token in local storage
        localStorage.setItem("id_token", token);
        console.log("Login successful");
        redirectToShop();
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
        alert("Account created successfully! Please login to begin shopping.");
      } else {
        alert("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("id_token");
    alert("Logging out...Successful. Have a good day!");
    //redirect
    console.log("Logged out");
  };

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <div className="createAccount">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button style={buttonStyle} onClick={handleCreateUser}>
          Create Account
        </button>
      </div>
      <div className="logIn">
        <input
          type="text"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button style={buttonStyle} onClick={handleLogin}>
          Login
        </button>
        <button style={buttonStyle} onClick={handleLogout}>
        Logout
      </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "200px",
  padding: "10px",
  marginBottom: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Login;
