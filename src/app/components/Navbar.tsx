"use client";

import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Box, Typography } from "@mui/material";
import styles from "../homestyles.module.css";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100vw",
        height: "60px",
        backgroundColor: "#23252b",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href={"/"}
          style={{
            marginLeft: "100px",
            marginRight: "40px",
          }}
        >
          <Typography
            sx={{ color: "#f47521", fontWeight: "bold", fontSize: "1.2em" }}
            className={styles.title}
          >
            Fanimation
          </Typography>
        </Link>

        <Box
          sx={{
            width: "100px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
          className={styles.pointer}
        >
          <Link style={{ fontSize: "1em" }} href={"/"}>
            Browse
          </Link>
          <ArrowDropDownIcon />
        </Box>

        <Box sx={{ width: "80px" }}>
          <Link href={"/"}>Games</Link>
        </Box>

        <Box sx={{ width: "80px" }}>
          <Link href={"/"}>Store</Link>
        </Box>

        <Box sx={{ width: "80px" }}>
          <Link href={"/"}>News</Link>
          <ArrowDropDownIcon />
        </Box>
      </Box>

      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ marginTop: "auto", marginBottom: "auto" }}>
          <Typography style={{ color: "#fab818" }}>Try Free</Typography>
          <Typography>Premium</Typography>
        </Box>

        <Box
          sx={{
            marginLeft: "40px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <SearchIcon />
        </Box>

        <Box
          sx={{
            marginLeft: "40px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <BeenhereIcon />
        </Box>

        <Box
          sx={{
            marginLeft: "40px",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "80px",
          }}
          className={styles.pointer}
        >
          <Link href="/login">
            <PermIdentityOutlinedIcon />
          </Link>
        </Box>
      </Box>
    </nav>
  );
}
