"use client";

import { Box } from "@mui/material";
import LoginCard from "../components/login/LoginCard";
import { useState } from "react";
import LoginButton from "../components/login/loginButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <p
        style={{
          fontSize: "2em",
          marginTop: "100px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          fontFamily: "poppins",
          marginBottom: "2rem",
        }}
      >
        Log In
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LoginCard
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </div>
      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <LoginButton email={email} password={password} />
      </Box>
    </div>
  );
}
