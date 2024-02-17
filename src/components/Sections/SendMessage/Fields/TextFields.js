/* eslint-disable react/prop-types */
import { Box, TextField } from "@mui/material";
import React from "react";

export default function TextFields({ placeholder_field, rowsSize, id, inVal }) {
  return (
    //     <Box component="form" noValidate autoComplete="off">
    <TextField
      sx={{
        backgroundColor: "white",
        borderRadius: "20px",
        //     flexShrink: "0",
        //   borderColor: "black",
        outline: "none",
        overflow: "hidden",
        border: "1px solid rgba(33, 137, 255, 0.40)",
      }}
      id={id}
      label={placeholder_field}
      // multiline
      maxRows={6}
      fullWidth
      variant="outlined"
      type="name"
      // size="medium"
      required
      rows={rowsSize}
      onChange={inVal}
    />
    //     </Box>
  );
}
