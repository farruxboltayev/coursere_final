/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousell.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-scroll";
// import bg from "../../../assets/carousell.png";
import child_img from "../../../assets/childtext.svg";
import star from "../../../assets/star.svg";

export default function Carousell() {
  return (
    <Box className="Carousell">
      <Swiper
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            display="flex"
            justifyContent="center"
            justifyItems="center"
            alignItems="flex-start"
            alignContent="center"
            flexDirection="column"
            gap="4vh"
            padding="56px 56px 56px 66px"
            sx={{
              padding: {
                sm: "56px 56px 56px 66px",
                xs: "56px 35px 56px 35px",
                md: "56px 56px 56px 66px",
                lg: "56px 56px 56px 66px",
                xl: "56px 56px 56px 66px",
              },
            }}
          >
            <Typography
              variant="p"
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{
                color: {
                  sm: "white",
                  xs: "white",
                  md: "#0B2441",
                  lg: "#0B2441",
                  xl: "#0B2441",
                },
                textAlign: "center",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                // opacity: "0.5",
              }}
            >
              Zamonaviy IT o'quv markazi <img src={star} alt="" />
            </Typography>
            <Typography
              // maxWidth="465px"
              sx={{
                maxWidth: {
                  sm: "100%",
                  xs: "100%",
                  md: "465px",
                  lg: "465px",
                  xl: "465px",
                },
                fontWeight: "700",
                // fontSize: "28px",
                lineHeight: {
                  sm: "25px",
                  xs: "25px",
                  md: "42px",
                  lg: "42px",
                  xl: "42px",
                },
                color: {
                  sm: "white",
                  xs: "white",
                  md: "black",
                  lg: "black",
                  xl: "black",
                },
                fontSize: {
                  sm: "18px",
                  xs: "18px",
                  md: "25px",
                  lg: "28px",
                  xl: "28px",
                },
              }}
              variant="p"
            >
              Biz sizga{" "}
              <Typography variant="span" className="child">
                zamonaviy kasbni <img className="img" src={child_img} alt="" />
              </Typography>{" "}
              o'rganishga va ish boshlashingizga yordam beramiz
            </Typography>

            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <Button
                variant="contained"
                color="mft_btn"
                sx={{
                  borderRadius: "20px",
                  color: "white",
                  padding: "1.5vh 3.5vh",
                  // padding: {
                  //   sm: "10px",
                  //   xs: "10px",
                  //   md: "14px",
                  //   lg: "16px",
                  //   xl: "16px",
                  // },
                  textAlign: "center",
                  fontFamily: "Manrope",
                  // fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px",
                  fontSize: {
                    sm: "10px",
                    xs: "10px",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
              >
                Kurslarni tanlash
              </Button>
            </Link>
          </Box>
          {/* <img src={bg} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display="flex"
            justifyContent="center"
            justifyItems="center"
            alignItems="flex-start"
            alignContent="center"
            flexDirection="column"
            gap="4vh"
            padding="56px 56px 56px 66px"
            sx={{
              padding: {
                sm: "56px 56px 56px 66px",
                xs: "56px 35px 56px 35px",
                md: "56px 56px 56px 66px",
                lg: "56px 56px 56px 66px",
                xl: "56px 56px 56px 66px",
              },
            }}
          >
            <Typography
              variant="p"
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{
                color: {
                  sm: "white",
                  xs: "white",
                  md: "#0B2441",
                  lg: "#0B2441",
                  xl: "#0B2441",
                },
                textAlign: "center",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                // opacity: "0.5",
              }}
            >
              Zamonaviy IT o'quv markazi <img src={star} alt="" />
            </Typography>
            <Typography
              // maxWidth="465px"
              sx={{
                maxWidth: {
                  sm: "100%",
                  xs: "100%",
                  md: "465px",
                  lg: "465px",
                  xl: "465px",
                },
                fontWeight: "700",
                // fontSize: "28px",
                lineHeight: {
                  sm: "25px",
                  xs: "25px",
                  md: "42px",
                  lg: "42px",
                  xl: "42px",
                },
                color: {
                  sm: "white",
                  xs: "white",
                  md: "black",
                  lg: "black",
                  xl: "black",
                },
                fontSize: {
                  sm: "18px",
                  xs: "18px",
                  md: "25px",
                  lg: "28px",
                  xl: "28px",
                },
              }}
              variant="p"
            >
              Biz sizga{" "}
              <Typography variant="span" className="child">
                zamonaviy kasbni <img className="img" src={child_img} alt="" />
              </Typography>{" "}
              o'rganishga va ish boshlashingizga yordam beramiz
            </Typography>
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <Button
                variant="contained"
                color="mft_btn"
                sx={{
                  borderRadius: "20px",
                  color: "white",
                  padding: "1.5vh 3.5vh",
                  // padding: {
                  //   sm: "10px",
                  //   xs: "10px",
                  //   md: "14px",
                  //   lg: "16px",
                  //   xl: "16px",
                  // },
                  textAlign: "center",
                  fontFamily: "Manrope",
                  // fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px",
                  fontSize: {
                    sm: "10px",
                    xs: "10px",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
              >
                Kurslarni tanlash
              </Button>
            </Link>
          </Box>
          {/* <img src={bg} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display="flex"
            justifyContent="center"
            justifyItems="center"
            alignItems="flex-start"
            alignContent="center"
            flexDirection="column"
            gap="4vh"
            padding="56px 56px 56px 66px"
            sx={{
              padding: {
                sm: "56px 56px 56px 66px",
                xs: "56px 35px 56px 35px",
                md: "56px 56px 56px 66px",
                lg: "56px 56px 56px 66px",
                xl: "56px 56px 56px 66px",
              },
            }}
          >
            <Typography
              variant="p"
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{
                color: {
                  sm: "white",
                  xs: "white",
                  md: "#0B2441",
                  lg: "#0B2441",
                  xl: "#0B2441",
                },
                textAlign: "center",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                // opacity: "0.5",
              }}
            >
              Zamonaviy IT o'quv markazi <img src={star} alt="" />
            </Typography>
            <Typography
              // maxWidth="465px"
              sx={{
                maxWidth: {
                  sm: "100%",
                  xs: "100%",
                  md: "465px",
                  lg: "465px",
                  xl: "465px",
                },
                fontWeight: "700",
                // fontSize: "28px",
                lineHeight: {
                  sm: "25px",
                  xs: "25px",
                  md: "42px",
                  lg: "42px",
                  xl: "42px",
                },
                color: {
                  sm: "white",
                  xs: "white",
                  md: "black",
                  lg: "black",
                  xl: "black",
                },
                fontSize: {
                  sm: "18px",
                  xs: "18px",
                  md: "25px",
                  lg: "28px",
                  xl: "28px",
                },
              }}
              variant="p"
            >
              Biz sizga{" "}
              <Typography variant="span" className="child">
                zamonaviy kasbni <img className="img" src={child_img} alt="" />
              </Typography>{" "}
              o'rganishga va ish boshlashingizga yordam beramiz
            </Typography>
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <Button
                variant="contained"
                color="mft_btn"
                sx={{
                  borderRadius: "20px",
                  color: "white",
                  padding: "1.5vh 3.5vh",
                  // padding: {
                  //   sm: "10px",
                  //   xs: "10px",
                  //   md: "14px",
                  //   lg: "16px",
                  //   xl: "16px",
                  // },
                  textAlign: "center",
                  fontFamily: "Manrope",
                  // fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px",
                  fontSize: {
                    sm: "10px",
                    xs: "10px",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
              >
                Kurslarni tanlash
              </Button>
            </Link>
          </Box>
          {/* <img src={bg} alt="" /> */}
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
