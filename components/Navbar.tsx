"use client";

import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100vw",
        height: "60px",
        backgroundColor: "#23252b",
        display: "flex",
        alignItems: "center",
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
    </nav>
  );
}
