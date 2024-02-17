/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import * as Telegram from "telegram-notify";
// import { toast } from "react-toastify";
import logoSourse from "../../../assets/logoSourse.png";
import TextFields from "./Fields/TextFields";

const notify = new Telegram({
  token: "6404526656:AAHQWh0sjlF_F3WyawZQtW_ahD6kylCmteY",
  chatId: "949677905",
});

export default function SendMessage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const sendMessage = () => {
    notify.send(`
    SO'ROVNOMA!

    Name: ${name} 
    phone: ${phone}
    email: ${email}
    `);
    // toast.success("🦄 Wow so easy!", {
    //   position: "bottom-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    setEmail("");
    setPhone("");
    setName("");
  };

  const inVal = (event) => {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "phone") {
      setPhone(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    }
  };

  return (
    <Box
      // width="100%"
      height="368px"
      sx={{
        borderRadius: "40px",
        background: "#EAF4FF",
        overflow: "hidden",
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
      position="relative"
      mb="5vh"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={1}
        // padding="2vh"
        display="flex"
        flexWrap="wrap"
        // alignItems="center"
        justifyContent="space-evenly"
        sx={{
          padding: {
            sm: "2vh",
            xs: "2vh",
            md: "2vh",
            lg: "10vh 0",
            xl: "100px 0",
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          // gap="2vh"
          sx={{
            width: {
              sm: "95%",
              xs: "95%",
              md: "95%",
              lg: "339px",
              xl: "339px",
            },
            alignItems: {
              sm: "center",
              xs: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            },
            gap: {
              sm: "2vh",
              xs: "2vh",
              md: "2vp",
              lg: "2vh",
              xl: "5%",
            },
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#0B2441",
              // fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "36px",
              textAlign: {
                sm: "center",
                xs: "center",
                md: "center",
                lg: "start",
                xl: "start",
              },
              fontSize: {
                sm: "20px",
                xs: "20px",
                md: "24px",
                lg: "24px",
                xl: "24px",
              },
            }}
          >
            Tanlovda yordam beramis!
          </Typography>
          <Typography
            maxWidth="339px"
            variant="p"
            sx={{
              color: "#0B2441",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "150%",
              maxWidth: {
                sm: "90%",
                xs: "90%",
                md: "90%",
                lg: "339px",
                xl: "339px",
              },
              textAlign: {
                sm: "center",
                xs: "center",
                md: "center",
                lg: "start",
                xl: "start",
              },
              display: {
                sm: "none",
                xs: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,
            raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="3vh"
          alignItems="flex-start"
          sx={{
            width: {
              sm: "100%",
              xs: "100%",
              md: "80%",
              lg: "50%",
              xl: "50%",
            },
            gap: {
              sm: "3vh",
              xs: "3vh",
              md: "3vp",
              lg: "3vh",
              xl: "30px",
            },
          }}
        >
          <TextFields
            placeholder_field="Ismingiz"
            rows="1"
            inVal={inVal}
            id="name"
          />
          <Box
            display="flex"
            justifyContent="center"
            gap="2vh"
            width="100%"
            sx={{
              flexDirection: {
                sm: "column",
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <TextFields
              placeholder_field="Telefon raqamingiz"
              rows="1"
              inVal={inVal}
              id="phone"
            />
            <TextFields
              placeholder_field="Pochtangiz"
              rows="1"
              inVal={inVal}
              id="email"
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            color="mft_btn"
            sx={{
              textTransform: "capitalize",
              display: "inline-flex",
              padding: "10px 36px",
              alignItems: "center",
              gap: "8px",
              borderRadius: "20px",
              backgroundColor: "#2189FF",
              color: "white",
            }}
            onClick={sendMessage}
          >
            yuborish
          </Button>
        </Box>
      </Box>
      <Box position="absolute" bottom="0" left="5vh" zIndex={0}>
        <img src={logoSourse} alt="" />
      </Box>
    </Box>
  );
}
