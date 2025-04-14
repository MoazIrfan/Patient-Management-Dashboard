import React, { useState } from "react";
import { TextField, Typography, Box, Paper, Link, styled, Button } from "@mui/material";

const SignInContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SignInBox = styled(Paper)(({ theme }) => ({
  maxWidth: 396,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  margin: 0,
  padding: theme.spacing(4),
  gap: theme.spacing(2),
}));

const SignInButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
}));

const SignInForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();

      const user = users.find(
        (u: { username: string; password: string }) =>
          u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/patients';
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="signin-title">
      <SignInContainer>
        <SignInBox>
          <Typography id="signin-title" variant="h5">
            Heali Care
          </Typography>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            variant="outlined"
            id="username"
            name="username"
            aria-required="true"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            id="password"
            name="password"
            type="password"
            aria-required="true"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <SignInButton 
            type="submit"
            aria-label="Sign in to your account"
            disabled={!username || !password}
          >
            Sign In
          </SignInButton>

          <Typography variant="body2">
            Don't have an account? <Link href="/">Sign up</Link>
          </Typography>
          {error && <Typography className="error">{error}</Typography>}

        </SignInBox>
      </SignInContainer>
    </form>
  );
};

export default SignInForm;