import { Box, Button, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { theme } from "./themes/theme";
import Home from "./components/Home/Home";
import Navbar from "./components/Sections/Navbar/Navbar";
import SendMessage from "./components/Sections/SendMessage/SendMessage";
import Footer from "./components/Sections/Footer/Footer";
import "./App.css";
import AllCourses from "./components/AllCourses/AllCourses";
import { userOnlineOrOffline } from "./app/isOnlieOrOffline/userOnlineThunk";

export default function App() {
  const location = useLocation();
  const { pathname } = useLocation();
  const [openModalVal, setOpenModalVal] = React.useState(false);
  const [activeCourse, setActiveCourse] = useState("Dasturlash");
  // const [ipAddress, setIPAddress] = useState("");
  const [onlineData, setOnlineData] = useState({
    device: null,
    ipAddress: null,
    isOnline: null,
  });
  const dispatch = useDispatch();

  const getData = () => {
    const res = axios.get("https://api.ipify.org/?format=json");
    onlineData.ipAddress = res.data.ip;
    onlineData.device = navigator.userAgent;
    setOnlineData({ ...onlineData });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        onlineData.ipAddress = data.ip;
        setOnlineData({ ...onlineData });
      });
    window.addEventListener("online", (e) => {
      onlineData.isOnline = true;
      setOnlineData({ ...onlineData });
      console.log(onlineData);
      dispatch(userOnlineOrOffline({ onlineData }));
    });
    return () => {
      onlineData.isOnline = false;
      setOnlineData({ ...onlineData });
      console.log(onlineData);
      dispatch(userOnlineOrOffline({ onlineData }));
    };
  }, []);

  const openModal = () => {
    setOpenModalVal(!openModalVal);
  };

  const getCourse = (name) => {
    openModal();
    setActiveCourse(name);
  };

  const activeCourseBtn = (course) => {
    setActiveCourse(course);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        // justifyContent="center"
        flexDirection="column"
        // alignItems={"center"}
        bgcolor="white"
      >
        <Box height="10vh" id="top_hero" width="100%"></Box>
        <Box
          position="fixed"
          top="0"
          zIndex="99"
          width="100%"
          sx={{ boxShadow: "0 2px 2px #f1f1f1" }}
          display="flex"
          justifyContent="center"
          bgcolor="white"
        >
          <Navbar
            openModal={openModal}
            openModalVal={openModalVal}
            getCourse={getCourse}
          />
        </Box>

        <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade" key={location.key}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/all-courses"
                element={
                  <AllCourses
                    activeCourseBtn={activeCourseBtn}
                    activeCourse={activeCourse}
                  />
                }
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>

        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <SendMessage />
        </Box>

        <Box
          bgcolor="#EAF4FF"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Footer />
        </Box>
      </Box>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      {openModalVal ? (
        <Box
          position="fixed"
          width="100vw"
          height="100vh"
          bgcolor="rgba(0, 0, 0, 0.3)"
          top={0}
          left={0}
          zIndex={0}
          onClick={openModal}
          getCourse={getCourse}
        ></Box>
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
