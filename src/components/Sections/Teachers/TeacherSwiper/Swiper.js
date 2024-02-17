/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Box, Typography, Stack } from "@mui/material";
import mentorImg from "../../../../assets/MentorImg.svg";
import icon from "../../../../assets/iconCourse.svg";

export default function SwiperTeacher({ mentors }) {
  return (
    <Box className="teacher">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 110,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {mentors.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Box
              py="2vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap="2vh"
              width="100%"
              //   bgcolor="red"
            >
              <img src={mentorImg} alt="" />
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
                  Alisherova Anvara
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
                    //   src="https://lh3.googleusercontent.com/pw/AIL4fc_kaPcSCLQEJNTPXXnuqrvIvQsps87JCM3QDsrwIU2IvNbzwXr3xs70-xFfvqU-NCeLiWgBADDmBLLZeShyJ5IEFGBkmKevQ87zjYjSyuzOSL_uc_v4ZQkz83wHO3LBn0n6YL0bcSaZ3QqTHyBVMfGa2Vm0YMKTP7MLV8KbOmZqfyJgZuhqm3yZSAic8eOGULqfjFcngfQBHw4tkSLjWO2sVurfevcTuhXcv-EsdtVdCAMhKYt4-WB_FZn2ql434VC95_eZdQHMImaoESe9lucRN0txmC_PFOP1opUA1oJHSzUjpscoYX2IgZbEj39pABjhUTNBF5khnrxJR0FkjctzFf_bPgTbDb2d4_bgLJbg9e77ryMR879MW7Tb6pmyDx1ZkrnMyyABuxshetqPNB6Ik-QhD7kzyx2glBTAsE9T619INGmQaZpRDr9RnAZSF8fRv-lcvUHsMQaGocNfRb3CbPAN6wRvbHd7oj0es0M0yAXoaH3g-q2iGnITMsDiYUpmIQpDpxbFOHarWs35xNbIKSvP1oxke-DDGh0NIKBCUFvu6WfjnmTQg5B22AVGpnSEnSFw4rj5t2NDBbzjvbLZ5imqaQ2umDipkhaQsF1VuMEWH2awh7BFgmc11SlSthGBhfXdifQwQzRjEdjQtfC8_X7g2GaLz2ziJ4LnYQRszvrDz4t5nQrLjvt-mMxMMk9oADZinm3vMYHk26GbTEoYRbbjvKx5kU3vTLb4Z82dLuFjV9LiA9Qp1Q_gFOcCS0NnnNyxH93LdrXbMgNEWtGUshUqQwpMJgmsmmi28RkS1zZzNkO26oXqYQrV-smOEChudiKj_VpLQ0dnb0J062R8lsv8UfjfBpCn9_XX9LJiOJJdzBXNBVFM_FYxnFmleoNW5M4y3eJWWO7z9Sz5kGLZIg=w28-h28-s-no?authuser=0"
                    src={icon}
                    alt=""
                  />{" "}
                  Dasturlash ustozi
                </Typography>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
