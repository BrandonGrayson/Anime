"use client";

import { Box, Button } from "@mui/material";
import LoginCard from "../components/login/LoginCard";

export default function LoginScreen() {
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
        <LoginCard />
      </div>
      <Button variant="contained" color="success">
        Log In
      </Button>
    </div>
  );
}
