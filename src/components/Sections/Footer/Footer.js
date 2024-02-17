/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../../assets/logoFooter.png";

export default function Footer() {
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
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        p="3vh 0"
        flexWrap="wrap"
        gap="2vh"
      >
        <Box
          maxWidth="263px"
          display="flex"
          flexDirection="column"
          gap="2vh"
          sx={{
            width: {
              sm: "100%",
              xs: "100%",
              md: "50%",
              lg: "30%",
              xl: "30%",
            },
          }}
        >
          <Box>
            <img src={logo} alt="" />
          </Box>
          <Typography
            variant="p"
            sx={{
              color: "#0B2441",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              letterSpacing: "0.24px",
            }}
          >
            Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
            orqali qiymat sotamiz.
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap="2vh"
          sx={{
            width: {
              sm: "100%",
              xs: "100%",
              md: "50%",
              lg: "70%",
              xl: "70%",
            },
          }}
        >
          <Box display="flex" flexDirection="column" gap="1vh">
            <Typography
              variant="p"
              sx={{
                color: "#979696",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "16px",
                letterSpacing: "0.24px",
              }}
            >
              Manzil
            </Typography>
            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                color: "#0B2441",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
                letterSpacing: "0.24px",
              }}
            >
              Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="1vh">
            <Typography
              variant="p"
              sx={{
                color: "#979696",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "16px",
                letterSpacing: "0.24px",
              }}
            >
              Manzil
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#0B2441",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
                letterSpacing: "0.24px",
              }}
            >
              +998 91 7775411
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="1vh">
            <Typography
              variant="p"
              sx={{
                color: "#979696",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "16px",
                letterSpacing: "0.24px",
              }}
            >
              Manzil
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#0B2441",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
                letterSpacing: "0.24px",
              }}
            >
              Info@farobiy.com
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-end" gap="2vh" mb="2vh">
        <Typography
          variant="p"
          sx={{
            color: "#0B2441",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.24px",
          }}
        >
          Facebook
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#0B2441",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.24px",
          }}
        >
          Twitter
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#0B2441",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.24px",
          }}
        >
          Telegram
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#0B2441",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.24px",
          }}
        >
          Youtube
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#0B2441",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.24px",
          }}
        >
          Instagram
        </Typography>
      </Box>
      <Box width="100%" height="2px" bgcolor="#18181826"></Box>
      <Box py="2vh">
        <Typography
          variant="p"
          sx={{
            color: "#0B2441",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.24px",
          }}
        >
          © 2022 by Fido Studio. Farobiy IT Academy
        </Typography>
      </Box>
    </Box>
  );
}
