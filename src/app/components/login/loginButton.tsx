"use client";
import { Button } from "@mui/material";

interface LoginButtonProps {
  email: string;
  password: string;
}

export default function LoginButton({ email, password }: LoginButtonProps) {
  const loginUser = async () => {
    console.log("email", email, "password", password);
    const req = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return req.json();
  };

  return (
    <Button
      variant="contained"
      color="success"
      sx={{
        backgroundColor: "#f47521 !important",
        marginTop: "2em",
      }}
      onClick={loginUser}
    >
      Log In
    </Button>
  );
}
