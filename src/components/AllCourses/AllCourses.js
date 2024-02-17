import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { direction } from "../../app/direction";
import icon from "../../assets/iconCourse.svg";
import imgCourse from "../../assets/CourseImg.svg";

export default function AllCourses({ activeCourseBtn, activeCourse }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getCourseItem = (item) => {
    const ar = item.corse_name.split(" ").join("-");
    //     console.log(item);
    navigate(`${location.pathname}/${ar}`);
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" my="6vh">
      <Box
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
            md: "5%",
            lg: "0",
            xl: "0",
          },
        }}
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        // margin=" 0 0 200vh 0"
        gap="2vh"
      >
        {/* Directions */}
        <Box
          display="flex"
          justifyContent="flex-start"
          gap="1vh"
          flexWrap="wrap"
        >
          {direction.map((item, index) => (
            <Button
              onClick={() => activeCourseBtn(item.name)}
              variant={activeCourse !== item.name ? "contained" : "contained"}
              color={activeCourse !== item.name ? "text" : "mft_btn"}
              sx={[
                activeCourse !== item.name
                  ? {
                      color: "black",
                      backgroundColor: "white",
                      border: "1px solid grey",
                    }
                  : { color: "white", border: "none" },
                {
                  borderRadius: "24px",
                  textTransform: "capitalize",
                  boxShadow: "none",
                },
              ]}
            >
              <Typography
                variant="p"
                display="flex"
                alignItems="center"
                gap="1vw"
              >
                {/* <img src={item.icon} alt="" /> */}
                <img
                  src={icon}
                  alt=""
                  style={
                    activeCourse !== item.name
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
            </Button>
          ))}
        </Box>

        {/* Courses */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap="2vh"
        >
          {direction
            .filter((prev) => prev.name === activeCourse)[0]
            .courses.map((item, index) => (
              <Box
                onClick={() => getCourseItem(item)}
                bgcolor={item.road_map[index].colors}
                sx={{
                  width: {
                    sm: "95%",
                    xs: "95%",
                    md: "48%",
                    lg: "30%",
                    xl: "30%",
                  },
                  height: "223px",
                  borderRadius: "44px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="p"
                  position="absolute"
                  bottom="10%"
                  left="10%"
                  sx={{
                    color: "#0B2441",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "32px",
                  }}
                  zIndex={1}
                >
                  {item.corse_name}
                </Typography>
                {/* <img src={item.road_map[index].img} alt="" /> */}
                <Box position="absolute" right="5%" bottom="30%" zIndex={0}>
                  <img
                    width="80%"
                    // src="https://lh3.googleusercontent.com/pw/AIL4fc85rfDUmm_Y24i2Uf6fYz84S4x7VeGFfXJRIpE4ezOerAkS_-uPMiTmGpjDqUEq_IYkCgnt5RqW9bDxgGmFPJgy0UCVHDfKyZAHa7zdGlWek_5pgPuIXq3Vd2j0rSmW68Rf-0kd8OYnplT53fmd9WkzuF3TwNfhCb3WY57jl-jxHYfWqLOgtRqKq3dJCdsvmp0heNPbet1HLfjPvXBQSctudstZVZm1lSQ-n2YSvmlJnzhdhI_56DjRCukBE7x960q_GhKv2rGvl70BG67sTmYDhM-Q14o-LbVmITOjzDB-6WH00IlLWYP7dSBhckk8e6U-dDagaWgNOMN-I6Vywzje0d2n8TeQEhjNuBbdTYDcv9DkbieHHYV4O5hnG4dg-g-dqLtfDzx2CoWea7mtuKEbd3PrHeFmjsM_AFYIxE32bxSaiGd6PdR3v-J3mRQehLmjnRF0aLrEXo7jaT_FrVjtj4WY2UYNCvQLNUA5AUcsL3nkVLkI-1GtpeTHkgIC2j697Qxvd4_REbO3RPaHaiTZ1RoAgufJK7MsMLa2ZB0dUw45u3EnmEd686XRwD1CcYGb6HsDfBFOp3srp4c3UllwDnzZSwL6SwF0nEVVKFLbupp0DRj_Wqux4_uOCE0ki9wYHm_8H9mL-quqBjIC-lGrgb_YvsnHJCF2wCelQJeJglYwagvRuS_Y4YBy7uN-vB0uYash1wuG1rYICzo-KeqdH0v01sZPAGzvVQv5-WDK2wO7xbMLjvLfY-Cm5Ulo0mbdbSryBpYHh0kiOry98LeydcGbOXcvGkvXa7fx8HKwXik4fxKbE8Rr-nZtxWxOTDnsvDx-6XgQRoji-0exPxw20mouZcRp94lCk5NJA9RrwDGswqYNH8jbTAeQxIS2AZHDBhygI1Gc07aXIalqstuK8A=w172-h172-s-no?authuser=0"
                    src={imgCourse}
                    alt=""
                  />
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
