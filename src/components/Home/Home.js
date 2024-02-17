/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Sections/Navbar/Navbar";
import Carousell from "../Sections/Carousell/Carousell";
import Courses from "../Sections/Courses/Courses";
import Teachers from "../Sections/Teachers/Teachers";
import About from "../Sections/AbouteMe/About";
import Questions from "../Sections/Questions/Questions";
import SendMessage from "../Sections/SendMessage/SendMessage";
import Footer from "../Sections/Footer/Footer";

export default function Home() {
  return (
    <Box width="100%">
      <Box padding="5vh 0 0 0" display="flex" justifyContent="center">
        <Box
          sx={{
            width: {
              sm: "90%",
              xs: "90%",
              md: "90%",
              lg: "90%",
              xl: "1332px",
            },
            margin: {
              sm: "5%",
              xs: "5%",
              md: "5%",
              lg: "5%",
              xl: "0",
            },
          }}
        >
          <Carousell />
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        my="6vh"
        id="courses"
      >
        <Courses />
      </Box>

      <Box
        id="teacher"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Teachers />
      </Box>

      <Box
        id="about"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <About />
      </Box>

      <Box
        id="question"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Questions />
      </Box>
    </Box>
  );
}
