import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

export default function HomeIcon() {
  return (
    <Link to="/">
      <img src={logo} width="150px" alt="" />
    </Link>
  );
}
