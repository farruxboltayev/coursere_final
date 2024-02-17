/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import React from "react";
import ControlledAccordions from "./Accordion";

export default function Questions() {
  return (
    <Box
      sx={{
        width: {
          sm: "90%",
          xs: "90%",
          md: "90%",
          lg: "1332px",
          xl: "1332px",
        },
        //   marginLeft: {
        //     sm: "5%",
        //     xs: "5%",
        //     md: "0",
        //     lg: "0",
        //     xl: "0",
        //   },
      }}
      py="5vh"
    >
      <Typography
        variant="p"
        sx={{
          color: "#0B2441",
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "44px",
        }}
      >
        Ko'p so'raladigan savollar
      </Typography>

      <Box width="100%">
        <ControlledAccordions />
      </Box>
    </Box>
  );
}
