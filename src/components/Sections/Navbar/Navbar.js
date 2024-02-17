/* eslint-disable react/jsx-boolean-value */
import {
  Box,
  Button,
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import logo from "../../../assets/logo.svg";
import book from "../../../assets/book.svg";
import phone from "../../../assets/phone.svg";
import HomeIcon from "./homeIcon";
import { direction } from "../../../app/direction";
import icon from "../../../assets/iconCourse.svg";
import ScrollBox from "./scrollBox";

export default function Navbar({ openModalVal, openModal, getCourse }) {
  const [age, setAge] = React.useState("10");
  const [activeLink, setActiveLink] = React.useState(false);
  const [defActive, setDefActive] = React.useState("Dasturlash");
  const [defActiveCourse, setDefActiveCourse] = React.useState(
    "Java Backend Development"
  );

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const overMouse = (e) => {
    // console.log(e);
    setDefActive(e);
  };
  const overCourseItem = (e) => {
    setDefActiveCourse(e);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      pt="2vh"
      sx={{
        width: {
          sm: "90%",
          xs: "90%",
          md: "90%",
          lg: "1332px",
          xl: "1332px",
        },
        marginLeft: {
          sm: "5%",
          xs: "5%",
          md: "0",
          lg: "0",
          xl: "0",
        },
      }}
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
      >
        <Stack flexDirection="row" gap={2} width="12%">
          <Stack mt={-1}>
            <Link
              to="top_hero"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              <HomeIcon />
            </Link>
          </Stack>
        </Stack>
        <Box
          display="flex"
          // position="unset"
          flexDirection="row"
          alignItems="center"
          gap="5vw"
          justifyContent="space-evenly"
          width="85%"
          mt="-5vh"
          sx={[
            activeLink
              ? openModalVal
                ? {
                    height: {
                      sm: "80vh",
                      xs: "80vh",
                      md: "80vh",
                      lg: "",
                      xl: "",
                    },
                  }
                : {
                    height: {
                      sm: "50vh",
                      xs: "50vh",
                      md: "50vh",
                      lg: "",
                      xl: "",
                    },
                  }
              : {
                  height: "",
                },
            {
              width: {
                sm: "105vw",
                xs: "105vw",
                md: "105vw",
                lg: "85%",
                xl: "85%",
              },
              marginLeft: {
                sm: "-10vw",
                xs: "-10vw",
                md: "-10vw",
                lg: "0",
                xl: "0",
              },
              position: {
                sm: "absolute",
                xs: "absolute",
                md: "absolute",
                lg: "unset",
                xl: "unset",
              },
              flexDirection: {
                sm: "column",
                xs: "column",
                md: "column",
                lg: "row",
                xl: "row",
              },
              justifyContent: {
                sm: "center",
                xs: "center",
                md: "center",
                lg: "space-between",
                xl: "space-between",
              },
              // height: {
              //   sm: "50vh",
              //   xs: "50vh",
              //   md: "50vh",
              //   lg: "",
              //   xl: "",
              // },
              backgroundColor: "white",
              transition: "all .5s linear",
              // backdropFilter: "blur(100px)",
            },
          ]}
          top="120%"
        >
          <Stack
            sx={[
              activeLink
                ? {
                    opacity: {
                      sm: "1",
                      xs: "1",
                      md: "1",
                      lg: "1",
                      xl: "1",
                    },
                    transform: {
                      sm: "translate(0, 0)",
                      xs: "translate(0, 0)",
                      md: "translate(0, 0)",
                      lg: "translate(0, 0)",
                      xl: "translate(0, 0)",
                    },
                  }
                : {
                    opacity: {
                      sm: "0",
                      xs: "0",
                      md: "0",
                      lg: "1",
                      xl: "1",
                    },
                    transform: {
                      sm: "translate(0, -150%)",
                      xs: "translate(0, -150%)",
                      md: "translate(0, -150%)",
                      lg: "translate(0, 0)",
                      xl: "translate(0, 0)",
                    },
                  },
              {
                transition: "all .5s linear",
              },
            ]}
          >
            <Button
              sx={{
                fontSize: "12px",
                display: "flex",
                gap: "10px",
                backgroundColor: "#EAF4FF",
                borderRadius: "10px",
                p: "16px 28px",
              }}
              color="mft_btn"
              onClick={openModal}
            >
              Kurslar <img src={book} alt="" />
            </Button>
          </Stack>
          <Box
            display="flex"
            alignItems="center"
            gap="2vw"
            sx={[
              activeLink
                ? {
                    opacity: {
                      sm: "1",
                      xs: "1",
                      md: "1",
                      lg: "1",
                      xl: "1",
                    },
                    transform: {
                      sm: "translate(0, 0)",
                      xs: "translate(0, 0)",
                      md: "translate(0, 0)",
                      lg: "translate(0, 0)",
                      xl: "translate(0, 0)",
                    },
                  }
                : {
                    opacity: {
                      sm: "0",
                      xs: "0",
                      md: "0",
                      lg: "1",
                      xl: "1",
                    },
                    transform: {
                      sm: "translate(0, -100%)",
                      xs: "translate(0, -100%)",
                      md: "translate(0, -100%)",
                      lg: "translate(0, 0)",
                      xl: "translate(0, 0)",
                    },
                  },
              {
                flexDirection: {
                  sm: "column",
                  xs: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                },
                transition: "all .5s linear",
                // transform: "translate(0, 100%)",
              },
            ]}
          >
            <Box>
              <ScrollBox to="teacher" text="Bizning ustozlarimiz" />
            </Box>
            <Box>
              <ScrollBox to="about" text="Biz haqimizda" />
            </Box>
            <Box>
              <ScrollBox to="question" text="Ko'p beriladigan savollar" />
            </Box>
            <Box>
              <FormControl sx={{ m: 0, minWidth: 80 }}>
                <Select
                  size="small"
                  sx={{
                    fontSize: "16px",
                    color: "#2189FF",
                    borderRadius: "16px",
                    // border: "1px solid #2189FF",
                    ".MuiOutlinedInput-root": {
                      "&:hover": {
                        borderRadius: 50,
                        borderColor: "red",
                        borderWidth: 10,
                      },
                    },
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChange}
                  autoWidth
                  defaultValue="10"
                  color="mft_btn"
                >
                  <MenuItem color="mft_btn" value="10">
                    UZ
                  </MenuItem>
                  <MenuItem color="mft_btn" value="20">
                    RU
                  </MenuItem>
                  <MenuItem color="mft_btn" value="30">
                    ENG
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  gap: "10px",
                  backgroundColor: "#EAF4FF",
                  borderRadius: "10px",
                  p: "1vh 2vh",
                }}
                color="mft_btn"
              >
                <img src={phone} alt="" /> +998 91 7775411
              </Button>
            </Box>

            <Box
              // position="absolute"
              sx={[
                openModalVal
                  ? {
                      display: {
                        sm: "flex",
                        xs: "flex",
                        md: "flex",
                        lg: "none",
                        xl: "none",
                      },
                    }
                  : {
                      display: {
                        sm: "none",
                        xs: "none",
                        md: "none",
                        lg: "none",
                        xl: "none",
                      },
                    },
                {
                  width: "100%",
                  height: "35vh",
                  top: "100%",
                  padding: "5vh",
                  transition: "all .5s linear",
                  position: {
                    sm: "",
                    xs: "",
                    md: "",
                    lg: "absolute",
                    xl: "absolute",
                  },
                },
              ]}
              bgcolor="white"
              // bgcolor="gray"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="0 0 20px 20px"
            >
              <Box
                width="30%"
                height="100%"
                borderRight="1px solid gray"
                display="flex"
                flexDirection="column"
                gap="2vh"
                sx={{
                  width: {
                    sm: "50%",
                    xs: "50%",
                    md: "30%",
                    lg: "30%",
                    xl: "30%",
                  },
                }}
              >
                {direction.map((item, index) => (
                  // <Typography variant="p"></Typography>
                  <Link to="/all-courses" key={item.id}>
                    <Box
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        getCourse(item.name);
                        setActiveLink((prev) => !prev);
                      }}
                      onMouseOver={() => overMouse(item.name)}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="90%"
                      ml="5%"
                    >
                      <Typography
                        variant="p"
                        display="flex"
                        alignItems="center"
                        gap="1vw"
                        sx={{
                          color: " #0B2441",
                          fontFamily: "Manrope",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "18px",
                        }}
                      >
                        {/* <img src={item.icon} alt="" /> */}
                        <img
                          src={icon}
                          alt=""
                          style={
                            defActive !== item.name
                              ? {
                                  filter: "grayscale(100%)",
                                  backgroundColor: "white",
                                  borderRadius: "50%",
                                  width: "22px",
                                  padding: "3px",
                                }
                              : {
                                  filter: "grayscale(0)",
                                  backgroundColor: "white",
                                  borderRadius: "50%",
                                  width: "22px",
                                  padding: "3px",
                                }
                          }
                        />
                        {item.name}
                      </Typography>
                      <NavigateNextIcon
                        sx={
                          defActive === item.name
                            ? { color: "#2189FF" }
                            : { color: "#0B244166" }
                        }
                      />
                    </Box>
                  </Link>
                ))}
              </Box>
              <Box
                width="30%"
                height="100%"
                display="flex"
                flexDirection="column"
                gap="2vh"
                sx={{
                  width: {
                    sm: "50%",
                    xs: "50%",
                    md: "30%",
                    lg: "30%",
                    xl: "30%",
                  },
                }}
              >
                {direction
                  .filter((prev) => defActive === prev.name)[0]
                  .courses.map((item, index) => (
                    <Box
                      key={item.id}
                      sx={{
                        cursor: "pointer",
                      }}
                      onMouseOver={() => overCourseItem(item.corse_name)}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="90%"
                      ml="5%"
                    >
                      <Typography
                        variant="p"
                        display="flex"
                        alignItems="center"
                        gap="1vw"
                        sx={{
                          color: " #0B2441",
                          fontFamily: "Manrope",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "18px",
                        }}
                      >
                        {/* <img src={item.icon} alt="" /> */}
                        {item.corse_name}
                      </Typography>
                      <NavigateNextIcon
                        sx={
                          defActiveCourse === item.corse_name
                            ? { color: "#2189FF" }
                            : { color: "#0B244166" }
                        }
                      />
                    </Box>
                  ))}
              </Box>
              <Box
                // width="40%"
                borderLeft="1px solid black"
                height="100%"
                display="flex"
                justifyContent="start"
                flexWrap="wrap"
                sx={{
                  width: {
                    sm: "0",
                    xs: "0",
                    md: "40%",
                    lg: "40%",
                    xl: "40%",
                  },
                  display: {
                    sm: "none",
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                {direction
                  .filter((prev) => defActive === prev.name)[0]
                  .courses.filter(
                    (prev) => prev.corse_name === defActiveCourse
                  )[0]
                  .road_map.map((item, index) => (
                    <Box
                      key={item.id}
                      sx={{
                        cursor: "pointer",
                      }}
                      width="calc(100% / 3)"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="p">{item.name}</Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Button
          variant="text"
          sx={{
            display: {
              sm: "block",
              xs: "block",
              md: "block",
              lg: "none",
              xl: "none",
            },
            color: "black",
            fontSize: "30px",
            padding: "0",
            margin: "-5vh 0 0 0",
          }}
          onClick={() => setActiveLink((prev) => !prev)}
        >
          <MenuIcon />
        </Button>

        <Box
          position="absolute"
          sx={[
            openModalVal
              ? { transform: "translate(0, 0)" }
              : { transform: "translate(0, -150%)" },
            {
              width: "100%",
              height: "35vh",
              top: "100%",
              padding: "5vh",
              transition: "all .5s linear",
              display: {
                sm: "none",
                xs: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
            },
          ]}
          bgcolor="white"
          // bgcolor="gray"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="0 0 20px 20px"
        >
          <Box
            width="30%"
            height="100%"
            borderRight="1px solid gray"
            display="flex"
            flexDirection="column"
            gap="2vh"
          >
            {direction.map((item, index) => (
              // <Typography variant="p"></Typography>
              <Link to="/all-courses" key={item.id}>
                <Box
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => getCourse(item.name)}
                  onMouseOver={() => overMouse(item.name)}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="90%"
                  ml="5%"
                >
                  <Typography
                    variant="p"
                    display="flex"
                    alignItems="center"
                    gap="1vw"
                    sx={{
                      color: " #0B2441",
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "18px",
                    }}
                  >
                    {/* <img src={item.icon} alt="" /> */}
                    <img
                      src={icon}
                      alt=""
                      style={
                        defActive !== item.name
                          ? {
                              filter: "grayscale(100%)",
                              backgroundColor: "white",
                              borderRadius: "50%",
                              width: "22px",
                              padding: "3px",
                            }
                          : {
                              filter: "grayscale(0)",
                              backgroundColor: "white",
                              borderRadius: "50%",
                              width: "22px",
                              padding: "3px",
                            }
                      }
                    />
                    {item.name}
                  </Typography>
                  <NavigateNextIcon
                    sx={
                      defActive === item.name
                        ? { color: "#2189FF" }
                        : { color: "#0B244166" }
                    }
                  />
                </Box>
              </Link>
            ))}
          </Box>
          <Box
            width="30%"
            height="100%"
            display="flex"
            flexDirection="column"
            gap="2vh"
          >
            {direction
              .filter((prev) => defActive === prev.name)[0]
              .courses.map((item, index) => (
                <Box
                  key={item.id}
                  sx={{
                    cursor: "pointer",
                  }}
                  onMouseOver={() => overCourseItem(item.corse_name)}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="90%"
                  ml="5%"
                >
                  <Typography
                    variant="p"
                    display="flex"
                    alignItems="center"
                    gap="1vw"
                    sx={{
                      color: " #0B2441",
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "18px",
                    }}
                  >
                    {/* <img src={item.icon} alt="" /> */}
                    {item.corse_name}
                  </Typography>
                  <NavigateNextIcon
                    sx={
                      defActiveCourse === item.corse_name
                        ? { color: "#2189FF" }
                        : { color: "#0B244166" }
                    }
                  />
                </Box>
              ))}
          </Box>
          <Box
            width="40%"
            borderLeft="1px solid black"
            height="100%"
            display="flex"
            justifyContent="start"
            flexWrap="wrap"
          >
            {direction
              .filter((prev) => defActive === prev.name)[0]
              .courses.filter((prev) => prev.corse_name === defActiveCourse)[0]
              .road_map.map((item, index) => (
                <Box
                  key={item.id}
                  sx={{
                    cursor: "pointer",
                  }}
                  width="calc(100% / 3)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="p">{item.name}</Typography>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
