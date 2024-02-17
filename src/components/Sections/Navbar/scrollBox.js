/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { Link } from "react-scroll";
import { Typography } from "@mui/material";

export default function ScrollBox({ to, text }) {
  return (
    <Typography
      variant="p"
      fontFamily="Manrope"
      sx={{
        textAlign: " center",
        color: "#0B2441",
        fontFamily: "Manrope",
        // fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "16px",
        fontSize: {
          sm: "12px",
          xs: "12px",
          md: "16px",
          lg: "16px",
          xl: "16px",
        },
      }}
    >
      <Link to={to} spy={true} smooth={true} offset={0} duration={500}>
        {text}
      </Link>
    </Typography>
  );
}
