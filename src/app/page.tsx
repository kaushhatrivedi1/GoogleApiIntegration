"use client"
import { Button, FormControl } from "@mui/base";
import { FormLabel, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleGoogleLogin = (response: any) => {
    console.log('Google Login Response:', response);
    // Implement logic to handle successful Google login:
    // - Send the Google access token to your backend for verification
    // - Handle successful authentication (e.g., store user data, redirect)
    // - Handle any errors during backend verification
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement traditional username/password login logic here if needed
    // ...
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="login-page">
        {/* <h2>Login</h2>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
          onFailure={(error) => setErrorMessage(error.message)}
          cookiePolicy={'single_host_origin'} // Optional cookie policy configuration
        />
        <br />
        
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <FormLabel htmlFor="username">Username</FormLabel>
            <TextField
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button variant="contained" type="submit" sx={{ mt: 3 }}>
            Login
          </Button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form> */}
      </div>
    </main>
  );
}
