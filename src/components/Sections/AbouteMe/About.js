/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import React from "react";
import like from "../../../assets/AboutLike.svg";
import medal from "../../../assets/AbouteMedal.svg";
import about1 from "../../../assets/about_1.svg";
import about2 from "../../../assets/about_2.svg";

export default function About() {
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
      >
        Biz haqimizda
      </Typography>
      <Box
        py="4vh"
        display="flex"
        justifyContent="space-between"
        width="100%"
        flexWrap="wrap"
        alignItems="stretch"
      >
        {/* left section */}
        <Box
          display="flex"
          flexDirection="column"
          gap="2vh"
          width="40.5%"
          sx={{
            width: {
              sm: "95%",
              xs: "95%",
              md: "40.5%",
              lg: "40.5%",
              xl: "40.5%",
            },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="2vh"
            alignItems="flex-start"
            bgcolor="#F1E2C1"
            sx={{
              width: "100%",
              display: "inline-flex",
              padding: "32px 92px 32px 32px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "40px",
            }}
          >
            <img src={like} alt="" />
            <Typography
              variant="p"
              sx={{
                color: "#0B2441",
                fontFamily: "Manrope",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati
              odamlar hayotida o'sish.
            </Typography>
          </Box>
          <Box>
            <img
              // src="https://lh3.googleusercontent.com/pw/AIL4fc80br74atUe02dUSUIn8Y344bmspWm89Rk1u5KAM4LEmKdPKw2PwNwLHarWlyQxeMXe7S3PGIyiulDdm4uvTFI3osyqelTu5zlp-TYzPooX0knzaaqX6uyyEUokfdk9do-jFAtXHs6obkHbnAkxDOD2HLNuM9kTUT7I7Uc-m9JF9SR0y8LQEudzu2mG3p49DXSWoSrJDgCk6J70TNu_OTd5GYo_uOC-x99JHK4UCyI_XUlO2QCjkUDfli-l3VYFNeN7AV-auCmTL2IP7hH1zwNHaugioQ7BCax9M43zfG30pzPHP0D9cTUMZEOXl011oAYap843ZbYRXjQz0GPZtT3UMZuAKNJGuolwL41V2JLZzBalpBYSbU6hYlUMDkGFnbOYESDZmarngI4-pBoM3tMXyDq6oi6333dXEdrPz2nW_W4IoB9btFc1aV175nTrMleU2BTpsMB6RhOCYwMKQqY6ZGT-OV23xnPh5R1PafW9eE0md8Tzu19BxcI1FkQkPl88JJA5_h9EI-jajGVqpn0DwJI9oMw0X-CR6UNa8xeEBEAD5YgOuQU3lppXQc2f5WRy2CJQ5swcOEREPCesXfz6KrC6gWZAbzQMcMkBsFv1fvTIVcvFNw7_HzYj8SB4XpeRF2I7rOQdJ1WeEshMErKSpt6S8cY9wSzDHppKU1ykdCbFh0SreuIWz_0msZIYBHW7Yjck36ge1EI3DW1Q0i53uTW7ffnlb-zFJOcIYU8ICYyMjuUonYGYAA4fRJ-jPLsMEv8ydWnOnW2Ekvwcsbw2VGSDwifXF5CrQkmkILmavXILwVWdwEkyGxgb_1zPaisaZnhcFVDK1g73LnxFMZEKBhjnjK3KXOdz4VTQf4l5J3ZHoOIy9TwJoPzGRL-40-x_6TFOiJSb98yfAeA3IX9beQ=w480-h459-s-no?authuser=0"
              src={about1}
              alt=""
              width="100%"
            />
          </Box>
        </Box>

        {/* Right section */}
        <Box
          Box
          display="flex"
          flexDirection="column"
          gap="2vh"
          width="57.5%"
          sx={{
            width: {
              sm: "95%",
              xs: "95%",
              md: "57.5%",
              lg: "57.5%",
              xl: "57.5%",
            },
          }}
        >
          <Box>
            <img
              // src="https://lh3.googleusercontent.com/pw/AIL4fc9qbK3ofD2yfi3GACCR6TZgLLTAjGDQ1uQWtDaHnV58T7UXOVirc9d9oZJtznn0s4Vuevl8UN6wTdDS45Yb3XJ3NvKmT7AwCuor23VUjbBn__ozSsGnicZJxY4FyjaoHlm3Jtj7D4QELUuLmnuz3NRCGaIKXc9QaF8DoOtWzSAjx1e5w3mjj9lOJldqIfwUSwx2_WqfXNR6Kk6BKRekVNKp8J69orTH4QKvEyAjgmVyx_87CdqHL2D5EhzRIgOwnAiQoSUKUlCEm7ln3fcX41AOLcC_TepCDV7HeTW7ayZR2ZxTwf3WXsj85IswK_w3E3s-90GEzpBAEC2AG3KRdyUtFD_M1g0kBipBSahVWcKBZD6-m7mIaa2e5LD5Mk6aMoLPVq_o8OiO2L9sKzHqiRBbHAigNNsJgPWI020bi1BGNDhpTNHPkrYtvDChjHwGHmYldfUYITajtPZywAWIupqDkVs9p2-woBNgx8Oji34BK05mknI9-4Jj56cXxSQk4zGhwceMitG4hKg5jhMLTwk9IQQkMo7GJTH52iffm7YxhLeIbLyl_4BCmZb2Daz4H8J9N7mUTI6fCSEK3CYFx4syL_wUaYB-cBpUxuTi9OwGrARYuWNTUaL-PBptJxeZ7S6w0x3-hksYiS_rbZyHNJSQJZNty24RcYblVPNClOG7Y_iCAcewWhkrOW9AV8OnHEG1JBs5Vb1c6fImONozh1LFuswqw3q0AKWrFMPrQ2qNsVh9yFOhj4FkOxuuRBdIvTUBqRlVpRGmiJahkFaDqs74Efd8NRWlebcrmDO4Ge5CutAqlk8bI5AKltyUTLQ8QvZP96QLXdgh2Ya8_mYVYIUFxFr6PD_eX7RqA-9OnZK9b126ervBkB7JqvWTUmsV029m1l34GvXSt7bEpKx7iSyuaA=w685-h428-s-no?authuser=0"
              src={about2}
              alt=""
              width="100%"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="2vh"
            alignItems="flex-start"
            bgcolor="#D8DBFB"
            sx={{
              width: "100%",
              display: "inline-flex",
              padding: "32px 119px 64px 32px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "24px",
              borderRadius: "40px",
            }}
          >
            <img src={medal} alt="" />
            <Typography
              variant="p"
              sx={{
                color: "#0B2441",
                fontFamily: "Manrope",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya,
              video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// https://lh3.googleusercontent.com/pw/AIL4fc9Iw8iHZI-JnWzecdrFGjucwxX7q4p4bJBzSXt13jekVpZX-qSJdT56Sfgi7jMWsk1xqGNSgR5Wvtx3QCriccdFHWt9_lSwoRugSRQ35jIabDiD2Or4K3p4vCv--zEl6-c5jDg8p5L4gRRGVfBMxAjSCt1cjL9_poUaq36BECZvw1kzZyVSVABVFGUkvG-GkzPMYTD-q76X5eU9-DMz9gUhHlBYeRADxr6f4ASZkripXqp4PaiNe-lcUyO6Mkf0C5WEw5h1KMlqPcfO4Uig4ZlSKX0SGsE41ZyWy4x3FtobLyOAH7ERO7ZoKVrqI_4cA78lCgEK-87SENaDWDcC3bNsyduScVatCDNFFDyFZ5bFAVtb_AVhvvvqLDojYDgjlQCzlbykIw5soK0LMckph2u9H4LS84BvAOzIgEZ-zKQmaLqfL5zHRrkTGiOgZJFEAMr7ke5k7FMHC-xx4ojm4Ha7YvPckQL4Gfiz0UA_o_242coYwnD3RFy1CPUhr_dsJvNZspmoUTHwdWfzed1-uN6shCbdUhbQKeBSq2Z-ACyY8gyljIy2i5voqc9oyh1cnPm8IlUguLOr_G6Hgw1f4KJVxRBq3lPdnQo8UlftFnFRinD_DxqgE_SZkyuy2J3Da7jTL7WxPXyqOoclk7zM2H1K6_thNnr9AgXjVHrgQT291FE4JaH-YN0tLWFQJsao6BzRlMxlNy52sTYzo49JpHIOOM71TBwmB9MZRRXU5m_jziY-QKd_t8H624n-ln11PeVR4o07eoLESGIOQvIZSGBCSdlyS_xVk0KBAyNoVJSyh1-378cwm9RkO79eDN-06pwDOW-dAe6p8LiajT0L7TJCYm5KERf6juVZbQf-EH0wF-TRh1KhIovj0i9IioRo0LEi4fbthlXb1EdmaRK8QT6Oow=w480-h459-s-no?authuser=0

// https://lh3.googleusercontent.com/pw/AIL4fc-lgzmiTcWq-eEUm-6y_5d4uYZr0_szCk2bdJQs_Uve_nkYdQnJU6XHD7aoDRx9Dc8TPEAzp3WNfo348U9bn7SytYCirJVY4uZuVlBRMS05Mva0yc_BEhbELPM3ugEOYVE8K1lLV0bkRghIoRkAKuTT6t0YObin8x6HmQj7hl0WB729hcQEmAaWcSxYmhf1R6_wKIzJJ8D8lrGLPtZRhOIOEyu-kFvvCDwKAceePQiMVrj_YS-KOcrA7j9LXKIE8TPUBUNwkgxKOACAdikiJa8FbOeuW5IiI1GsZCRKMqb6HLHPF57dEFQU8g4RpDTmgdxRIjUR8vLQXorZKy_5JG8fUGQ7Isbw-ddOUHRNf4no6N6GP4jVetPkK1nA5sbJ45lff7zNhjukBr-_kELNygtQvi_SOemn_Rmtvyw-WryOfHJqdGsftuXHccUEu7gT3weYSgOBY7oU1OEKeL5x-MO3qPeaKzY89hY_u5TcDSxeDlJqFR_Fz1nKS_661NqGdwPUdMd6fzFQdz5m7tR6Bblsx-zX8TbZS7OCgpoJnFK5Cazi8m1ZyyzGBmd7ytkFEJQv5l0i7kWm5dukBKFD2ICrlsxTy7MT1s3TUdvwFtbQw_xtjvkuK89F8sB_-PVKFMs1q65oLLx_i7irIrlr46nIpQOINCPuNNu78W-hB1PVXY9ZoX_992yJ4GxKTlaqsqHCxJ1u5PujtIzwML9Jf0ucOUN14KQ9uSW29NEyotie2SCsTfmpMUqPg3pjdoXlvFtilHxIXTGind8xA0K8vDwn1Yl6fyNHlfFTebpOPQOctWR7rdVRkGqC46WPguDDb7pHyTdzEae920EEXk3wsHTDdyixZ14XBmCgckAXfjlsDaCub3MYG0D9xX7IJVOAmUJHbxuGPnoPK3beGhiutnPSpw=w685-h428-s-no?authuser=0
