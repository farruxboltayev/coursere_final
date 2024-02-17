/* eslint-disable prefer-const */
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mentors } from "../../../app/Mentors";
import SwiperTeacher from "./TeacherSwiper/Swiper";
import mentorImg from "../../../assets/MentorImg.svg";
import icon from "../../../assets/iconCourse.svg";

export default function Teachers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data.length <= 0) {
      axios
        .get("http://192.168.1.91:8080/teacher")
        .then((res) => {
          console.log(res.data);
          setData(res.data.data);
        })
        .catch((error) => error);
    }

    // console.log(data);
  }, []);
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
          md: "0",
          lg: "0",
          xl: "0",
        },
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
        //   m="0 0 2vh 0"
      >
        Bizning ustozlarimiz
      </Typography>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        gap="4vh 4% "
        flexWrap="wrap"
        my="4vh"
        sx={{
          display: {
            sm: "none",
            xs: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        {data.map((item, ind) => (
          <Box
            key={item.id}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="2vh"
            width="22%"
            // bgcolor="red"
            sx={{
              width: {
                sm: "48%",
                xs: "100%",
                md: "calc(88% / 3)",
                lg: "22%",
                xl: "22%",
              },
            }}
          >
            <img
              //   src="https://lh3.googleusercontent.com/pw/AIL4fc89Q4Q52yT4HRSJTEPMFphx7zXY-bNA1iQMgc2WJZGWlVXssRyFXyOtsYcVsDnWcMk9G33HtYyx_0oUA1ckM-U96_B9bbufOPMLlO9LPEVVTUszTVnKYT35FGKKta5U09O52f0GeE7KPmGlGzMrCgVJrXVs2tEqPFKgLNG97ElMsLeLPv4nd7zon298QXk1iJKVkdwZoWnm7FZokeEbrA4QyhLwMFfdiH9P_M6Pvn0OAG9RAvmDrdUF9hfNYlW6G8URn6E_6gseEmaq2bDBHiVBM-BztDBOJTRH3sGl6jB1u1ZHdcODfGVRRn6WGcMVD8JrRzobRJrYMgv58mybDB9Jq3U9sls-zOybdQWxDqZpHk8gwaJ-pINddNFkc91XP2S7R2RHiEwRmm9oRIpC_J_rfCo-61NJ3Bot_WVL4PAVz9058_dw5wqWkNFGGe7Q7HHLKlVcse4cfFKryJeBeQgTweycWJGP0nJoJkzpuYL5g_cBPVR73UC8G4z6O5JrCwSVTEDsVaTpawzygnWr6FDhPBtNY09e50lujxnueGe68TizCyZOT11RqUd_LNwg29D5mSTpLFVZIRUOG_T3xgy-axjdW90PmR8WHzgO7s6FYjtR_-0Q4OFAq59rePndQ8vI7yFPj04qsVkxdeCUWttMxX-nniCYMmQd0LSqWFqOHZ_OZjdtoURYv9CJYyNh4YlHQ0VqUQu-FajR5whe9FJ6AXmqsOzMThnUW5Y6f-0qVYmCgeAbLJTVgeSIi2OmBSFnSMPIM5bAo-hdD2UYKSgO7Q6RgR4wgNyDx50R5CnBf1tdFoeDiwrwHj2a7SEMepI_5_fCBoyIfCrvNebCuTGvtd844ZI2WSU2Q-0AF-iWcVzL9MjRKKIzCsYZxKiEsQYdiyMFjUOZ6r0d3Uowwipz-A=w240-h240-s-no?authuser=0"
              src={mentorImg}
              // src={item.image}
              alt=""
            />
            <Stack gap={1}>
              <Typography
                variant="p"
                sx={{
                  color: "#0B2441",
                  textAlign: "center",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "32px",
                }}
              >
                {item.fullName}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#0B2441",
                  textAlign: "center",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "20px",
                }}
                display="flex"
                gap="1vh"
                alignItems="center"
                justifyContent="center"
              >
                <img
                  // src="https://lh3.googleusercontent.com/pw/AIL4fc_kaPcSCLQEJNTPXXnuqrvIvQsps87JCM3QDsrwIU2IvNbzwXr3xs70-xFfvqU-NCeLiWgBADDmBLLZeShyJ5IEFGBkmKevQ87zjYjSyuzOSL_uc_v4ZQkz83wHO3LBn0n6YL0bcSaZ3QqTHyBVMfGa2Vm0YMKTP7MLV8KbOmZqfyJgZuhqm3yZSAic8eOGULqfjFcngfQBHw4tkSLjWO2sVurfevcTuhXcv-EsdtVdCAMhKYt4-WB_FZn2ql434VC95_eZdQHMImaoESe9lucRN0txmC_PFOP1opUA1oJHSzUjpscoYX2IgZbEj39pABjhUTNBF5khnrxJR0FkjctzFf_bPgTbDb2d4_bgLJbg9e77ryMR879MW7Tb6pmyDx1ZkrnMyyABuxshetqPNB6Ik-QhD7kzyx2glBTAsE9T619INGmQaZpRDr9RnAZSF8fRv-lcvUHsMQaGocNfRb3CbPAN6wRvbHd7oj0es0M0yAXoaH3g-q2iGnITMsDiYUpmIQpDpxbFOHarWs35xNbIKSvP1oxke-DDGh0NIKBCUFvu6WfjnmTQg5B22AVGpnSEnSFw4rj5t2NDBbzjvbLZ5imqaQ2umDipkhaQsF1VuMEWH2awh7BFgmc11SlSthGBhfXdifQwQzRjEdjQtfC8_X7g2GaLz2ziJ4LnYQRszvrDz4t5nQrLjvt-mMxMMk9oADZinm3vMYHk26GbTEoYRbbjvKx5kU3vTLb4Z82dLuFjV9LiA9Qp1Q_gFOcCS0NnnNyxH93LdrXbMgNEWtGUshUqQwpMJgmsmmi28RkS1zZzNkO26oXqYQrV-smOEChudiKj_VpLQ0dnb0J062R8lsv8UfjfBpCn9_XX9LJiOJJdzBXNBVFM_FYxnFmleoNW5M4y3eJWWO7z9Sz5kGLZIg=w28-h28-s-no?authuser=0"
                  src={icon}
                  alt=""
                />{" "}
                {item.jobTitle}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
      <Box
        py="10vh"
        sx={{
          display: {
            sm: "block",
            xs: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <SwiperTeacher mentors={mentors} />
      </Box>
    </Box>
  );
}
