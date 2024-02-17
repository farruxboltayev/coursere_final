/* eslint-disable react/jsx-boolean-value */
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import next from "../../../assets/next.svg";
import "./animTezKunda.css";

export default function Courses() {
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
        Biz orgatadigan kurslar
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        gap="2vh 2%"
        width="100%"
        flexWrap="wrap"
      >
        <Box
          // width="80%"
          sx={{
            width: { sm: "100%", xs: "100%", md: "95%", lg: "74%", xl: "74%" },
          }}
          display="flex"
          justifyContent="space-between"
          gap="2vh 2% "
          flexDirection="column"
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            gap="2vh 2%"
            flexWrap="wrap"
          >
            <Box
              // width="39%"
              // bgcolor="green"
              height="273px"
              sx={{
                flexShrink: "0",
                borderRadius: "44px",
                background:
                  "url('https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg'), linear-gradient( 180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 70.9%)",
                overflow: "hidden",
                backgroundSize: "cover",
                width: {
                  sm: "95%",
                  xs: "95%",
                  md: "39%",
                  lg: "39%",
                  xl: "39%",
                },
              }}
              position="relative"
            >
              <Box
                position="absolute"
                bottom="32px"
                left="32px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="1vh"
              >
                <Typography
                  variant="p"
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "32px",
                  }}
                >
                  Dasturlash
                </Typography>
                <Link to="/all-courses">
                  <Button
                    variant="contained"
                    color="info"
                    sx={[
                      {
                        fontSize: "16px",
                        textTransform: "capitalize",
                        display: "flex",
                        gap: "10px",
                        backgroundColor: "#2189FF",
                        borderRadius: "12px",
                        p: "10px 24px",
                        color: "white",
                      },
                    ]}
                  >
                    Kurslar <img src={next} alt="" />
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              width="59%"
              // bgcolor="green"
              height="273px"
              sx={{
                flexShrink: "0",
                borderRadius: "44px",
                background:
                  "url('https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg'), linear-gradient( 180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 70.9%)",
                overflow: "hidden",
                backgroundSize: "cover",
                width: {
                  sm: "95%",
                  xs: "95%",
                  md: "59%",
                  lg: "58%",
                  xl: "58%",
                },
              }}
              position="relative"
            >
              <Box
                position="absolute"
                bottom="32px"
                left="32px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="1vh"
              >
                <Typography
                  variant="p"
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "32px",
                  }}
                >
                  Dasturlash 3
                </Typography>
                <Link to="/all-courses">
                  <Button
                    variant="contained"
                    color="info"
                    sx={[
                      {
                        fontSize: "16px",
                        textTransform: "capitalize",
                        display: "flex",
                        gap: "10px",
                        backgroundColor: "#2189FF",
                        borderRadius: "12px",
                        p: "10px 24px",
                        color: "white",
                      },
                    ]}
                  >
                    Kurslar <img src={next} alt="" />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            gap="2vh 2%"
            flexWrap="wrap"
          >
            <Box
              width="59%"
              // bgcolor="green"
              height="273px"
              sx={{
                flexShrink: "0",
                borderRadius: "44px",
                background:
                  "url('https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg'), linear-gradient( 180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 70.9%)",
                overflow: "hidden",
                backgroundSize: "cover",
                width: {
                  sm: "95%",
                  xs: "95%",
                  md: "59%",
                  lg: "59%",
                  xl: "59%",
                },
              }}
              position="relative"
            >
              <Box
                position="absolute"
                bottom="32px"
                left="32px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="1vh"
              >
                <Typography
                  variant="p"
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "32px",
                  }}
                >
                  Dasturlash
                </Typography>

                <Link to="/all-courses">
                  <Button
                    variant="contained"
                    color="info"
                    sx={[
                      {
                        fontSize: "16px",
                        textTransform: "capitalize",
                        display: "flex",
                        gap: "10px",
                        backgroundColor: "#2189FF",
                        borderRadius: "12px",
                        p: "10px 24px",
                        color: "white",
                      },
                    ]}
                  >
                    Kurslar <img src={next} alt="" />
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              width="39%"
              // bgcolor="green"
              height="273px"
              sx={{
                flexShrink: "0",
                borderRadius: "44px",
                background:
                  "url('https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg'), linear-gradient( 180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 70.9%)",
                overflow: "hidden",
                backgroundSize: "cover",
                width: {
                  sm: "95%",
                  xs: "95%",
                  md: "39%",
                  lg: "39%",
                  xl: "39%",
                },
              }}
              position="relative"
            >
              <Box
                position="absolute"
                bottom="32px"
                left="32px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="1vh"
              >
                <Typography
                  variant="p"
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "32px",
                  }}
                >
                  Dasturlash
                </Typography>
                <Link to="/all-courses">
                  <Button
                    variant="contained"
                    color="info"
                    sx={[
                      {
                        fontSize: "16px",
                        textTransform: "capitalize",
                        display: "flex",
                        gap: "10px",
                        backgroundColor: "#2189FF",
                        borderRadius: "12px",
                        p: "10px 24px",
                        color: "white",
                      },
                    ]}
                  >
                    Kurslar <img src={next} alt="" />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          // width="19%"
          sx={{
            width: { sm: "95%", xs: "95%", md: "95%", lg: "24%", xl: "24%" },
            flexDirection: {
              sm: "column",
              xs: "column",
              md: "row",
              lg: "column",
              xl: "column",
            },
          }}
          display="flex"
          gap="2vh"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Box
            width="100%"
            // bgcolor="green"
            height="336px"
            sx={{
              flexShrink: "0",
              borderRadius: "44px",
              background:
                "url('https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg'), linear-gradient( 180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 70.9%)",
              overflow: "hidden",
              backgroundSize: "cover",
              width: {
                sm: "100%",
                xs: "100%",
                md: "49%",
                lg: "100%",
                xl: "100%",
              },
            }}
            position="relative"
          >
            <Box
              position="absolute"
              bottom="32px"
              left="32px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="1vh"
            >
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "32px",
                }}
              >
                Dasturlash
              </Typography>
              <Link
                to="/all-courses"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <Button
                  variant="contained"
                  color="info"
                  sx={[
                    {
                      fontSize: "16px",
                      textTransform: "capitalize",
                      display: "flex",
                      gap: "10px",
                      backgroundColor: "#2189FF",
                      borderRadius: "12px",
                      p: "10px 24px",
                      color: "white",
                    },
                  ]}
                >
                  Kurslar <img src={next} alt="" />
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            width="100%"
            bgcolor="#EAF4FF"
            height="210px"
            sx={{
              flexShrink: "0",
              borderRadius: "44px",
              overflow: "hidden",
              width: {
                sm: "100%",
                xs: "100%",
                md: "49%",
                lg: "100%",
                xl: "100%",
              },
              height: {
                sm: "210px",
                xs: "210px",
                md: "100%",
                lg: "210px",
                xl: "210px",
              },
            }}
            position="relative"
          >
            <Box p="32px 32px 0 32px">
              <Typography
                variant="p"
                // margin="32px 0 0 32px"
                sx={{
                  color: "#0B2441",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "28px",
                }}
              >
                Tez orada yangi kurs!
              </Typography>
            </Box>
            <Box
              position="absolute"
              top="30%"
              left="-30px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="1vh"
              bgcolor="#2189FF"
              padding="20px 0 "
              color="white"
              sx={{
                transform: "rotate(-10deg)",
              }}
              width="150vh"
            >
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "16px",
                }}
                className="animBox"
                display="flex"
                gap="2"
                justifyContent="space-between"
                width="100%"
              >
                <Typography variant="span">Tez orada yangi kurs!</Typography>
                <Typography variant="span">Tez orada yangi kurs!</Typography>
                <Typography variant="span">Tez orada yangi kurs!</Typography>
                <Typography variant="span">Tez orada yangi kurs!</Typography>
                <Typography variant="span">Tez orada yangi kurs!</Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
