"use client";

import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link
          href={"/"}
          style={{
            fontSize: "1.2em",
            marginLeft: "100px",
            marginRight: "40px",
            color: "#f47521",
            fontWeight: "bold",
          }}
        >
          fanimation
        </Link>

        <div style={{ display: "block", width: "100px" }}>
          <Link style={{ fontSize: "1em" }} href={"/"}>
            Browse
          </Link>
          <ArrowDropDownIcon />
        </div>

        <div style={{ width: "80px" }}>
          <Link href={"/"}>Games</Link>
        </div>

        <div style={{ width: "80px" }}>
          <Link href={"/"}>Store</Link>
        </div>

        <div style={{ width: "80px" }}>
          <Link href={"/"}>News</Link>
          <ArrowDropDownIcon />
        </div>
      </div>

      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p style={{ color: "#fab818" }}>Try Free</p>
          <p>Premium</p>
        </div>

        <div
          style={{
            marginLeft: "40px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <SearchIcon />
        </div>

        <div
          style={{
            marginLeft: "40px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <BeenhereIcon />
        </div>

        <div
          style={{
            marginLeft: "40px",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "80px",
          }}
        >
          <PermIdentityOutlinedIcon />
        </div>
      </div>
    </nav>
  );
}
