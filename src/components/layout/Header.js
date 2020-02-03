import React, { Component } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h2>ToDo List</h2>
      <Link style={LinkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={LinkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const LinkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
