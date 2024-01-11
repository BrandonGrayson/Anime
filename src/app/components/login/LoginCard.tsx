"use client";
import { Card, CardActions, TextField, Box } from "@mui/material";
import { useState, Dispatch, SetStateAction } from "react";
import styles from "./loginstyles.module.css";

interface LoginCardProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

export default function LoginCard({
  email,
  setEmail,
  password,
  setPassword,
}: LoginCardProps) {
  return (
    <>
      <Card
        sx={{ width: 600, height: 300, backgroundColor: "rgb(20, 21, 25)" }}
      >
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Email Address"
            variant="standard"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ width: "400px", marginTop: "40px" }}
            InputLabelProps={{ className: styles.textfield }}
          />
          <TextField
            label="Password"
            variant="standard"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ width: "400px", marginTop: "20px" }}
            InputLabelProps={{ className: styles.textfield }}
          />
        </CardActions>
      </Card>
      <Box></Box>
    </>
  );
}
