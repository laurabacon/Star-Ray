// Login.js
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // Redirect or do something else upon successful login
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
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // Redirect or do something else upon successful account creation
        console.log("Account created successfully");
      } else {
        alert("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateUser}>Create Account</button>
    </div>
  );
}


// Login.js
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // Redirect or do something else upon successful login
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
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // Redirect or do something else upon successful account creation
        console.log("Account created successfully");
      } else {
        alert("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateUser}>Create Account</button>
    </div>
  );
}

export default Login;