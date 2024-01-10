"use client";
import {
  Button,
  Card,
  CardActions,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import styles from "./loginstyles.module.css";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card sx={{ width: 600, height: 300, backgroundColor: "rgb(20, 21, 25)" }}>
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
  );
}
