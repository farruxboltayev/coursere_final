import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f1f1f1",
      light: "skyblue",
    },
    secondary: {
      main: "#F4F4F4",
    },
    mft_btn: {
      main: "#2189FF",
    },
    badgeColor: {
      main: "#3292BA",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1232,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            // borderRadius: 16,
            // borderColor: "#2189FF",
            border: "none",
          },
          " .MuiOutlinedInput-notchedOutline": {
            // borderRadius: 16,
            // borderColor: "#2189FF",
            border: "none",
          },
        },
      },
    },
  },
});
