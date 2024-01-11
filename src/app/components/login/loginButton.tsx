"use client";
import { Button } from "@mui/material";

interface LoginButtonProps {
  email: string;
  password: string;
}

export default function LoginButton({ email, password }: LoginButtonProps) {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{
        backgroundColor: "#f47521 !important",
        marginTop: "2em",
      }}
    >
      Log In
    </Button>
  );
}
