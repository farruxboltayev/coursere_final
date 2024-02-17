import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      width="100%"
      my="4vh"
      display="flex"
      flexDirection="column"
      gap="2vh"
      sx={{ outline: "none", border: "none" }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          borderRadius: "35px!important",
          background: "#F4F4F4",
          boxShadow: "none",
          //     boxShadow: "0 5px 5px #d4d4d4",
        }}
      >
        <AccordionSummary
          //     expandIcon={<ExpandMoreIcon />}
          expandIcon={
            expanded === "panel1" ? <RemoveCircleIcon /> : <AddCircleIcon />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            variant="p"
            sx={{
              width: "95%",
              //   flexShrink: 0,
              color: "#0B2441",
              fontFamily: "Manrope",
              //   fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              // padding: "15px 30px",
              padding: {
                sm: "10px 20px",
                xs: "10px 20px",
                md: "12px 25px",
                lg: "15px 30px",
                xl: "15px 30px",
              },
              fontSize: {
                sm: "15px",
                xs: "15px",
                md: "22px",
                lg: "22px",
                xl: "22px",
              },
            }}
          >
            Farobiy IT Academy bu nima?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="p"
            sx={{
              //   width: "95%",
              flexShrink: 0,
              color: "#454545",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              //   padding: "20px 30px",
            }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Aliquam eget maximus
            est, id dignissim quam. Aliquam eget maximus est, id dignissim quam.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          borderRadius: "35px!important",
          background: "#F4F4F4",
          boxShadow: "none",
          //     boxShadow: "0 5px 5px #d4d4d4",
        }}
      >
        <AccordionSummary
          //     expandIcon={<ExpandMoreIcon />}
          expandIcon={
            expanded === "panel2" ? <RemoveCircleIcon /> : <AddCircleIcon />
          }
          aria-controls="panel1bh-content"
          id="panel2bh-header"
        >
          <Typography
            variant="p"
            sx={{
              width: "95%",
              //   flexShrink: 0,
              color: "#0B2441",
              fontFamily: "Manrope",
              //   fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              // padding: "15px 30px",
              padding: {
                sm: "10px 20px",
                xs: "10px 20px",
                md: "12px 25px",
                lg: "15px 30px",
                xl: "15px 30px",
              },
              fontSize: {
                sm: "15px",
                xs: "15px",
                md: "22px",
                lg: "22px",
                xl: "22px",
              },
            }}
          >
            Farobiy IT Academy bu nima?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="p"
            sx={{
              //   width: "95%",
              flexShrink: 0,
              color: "#454545",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              //   padding: "20px 30px",
            }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Aliquam eget maximus
            est, id dignissim quam. Aliquam eget maximus est, id dignissim quam.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          borderRadius: "35px!important",
          background: "#F4F4F4",
          boxShadow: "none",
          //     boxShadow: "0 5px 5px #d4d4d4",
        }}
      >
        <AccordionSummary
          //     expandIcon={<ExpandMoreIcon />}
          expandIcon={
            expanded === "panel3" ? <RemoveCircleIcon /> : <AddCircleIcon />
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            variant="p"
            sx={{
              width: "95%",
              //   flexShrink: 0,
              color: "#0B2441",
              fontFamily: "Manrope",
              //   fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              // padding: "15px 30px",
              padding: {
                sm: "10px 20px",
                xs: "10px 20px",
                md: "12px 25px",
                lg: "15px 30px",
                xl: "15px 30px",
              },
              fontSize: {
                sm: "15px",
                xs: "15px",
                md: "22px",
                lg: "22px",
                xl: "22px",
              },
            }}
          >
            Farobiy IT Academy bu nima?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="p"
            sx={{
              //   width: "95%",
              flexShrink: 0,
              color: "#454545",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              //   padding: "20px 30px",
            }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Aliquam eget maximus
            est, id dignissim quam. Aliquam eget maximus est, id dignissim quam.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          borderRadius: "35px!important",
          background: "#F4F4F4",
          boxShadow: "none",
          //     boxShadow: "0 5px 5px #d4d4d4",
        }}
      >
        <AccordionSummary
          //     expandIcon={<ExpandMoreIcon />}
          expandIcon={
            expanded === "panel4" ? <RemoveCircleIcon /> : <AddCircleIcon />
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            variant="p"
            sx={{
              width: "95%",
              //   flexShrink: 0,
              color: "#0B2441",
              fontFamily: "Manrope",
              //   fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              // padding: "15px 30px",
              padding: {
                sm: "10px 20px",
                xs: "10px 20px",
                md: "12px 25px",
                lg: "15px 30px",
                xl: "15px 30px",
              },
              fontSize: {
                sm: "15px",
                xs: "15px",
                md: "22px",
                lg: "22px",
                xl: "22px",
              },
            }}
          >
            Farobiy IT Academy bu nima?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="p"
            sx={{
              //   width: "95%",
              flexShrink: 0,
              color: "#454545",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              //   padding: "20px 30px",
            }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Aliquam eget maximus
            est, id dignissim quam. Aliquam eget maximus est, id dignissim quam.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{
          borderRadius: "35px!important",
          background: "#F4F4F4",
          boxShadow: "none",
          //     boxShadow: "0 5px 5px #d4d4d4",
        }}
      >
        <AccordionSummary
          //     expandIcon={<ExpandMoreIcon />}
          expandIcon={
            expanded === "panel5" ? <RemoveCircleIcon /> : <AddCircleIcon />
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography
            variant="p"
            sx={{
              width: "95%",
              //   flexShrink: 0,
              color: "#0B2441",
              fontFamily: "Manrope",
              //   fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              // padding: "15px 30px",
              padding: {
                sm: "10px 20px",
                xs: "10px 20px",
                md: "12px 25px",
                lg: "15px 30px",
                xl: "15px 30px",
              },
              fontSize: {
                sm: "15px",
                xs: "15px",
                md: "22px",
                lg: "22px",
                xl: "22px",
              },
            }}
          >
            Farobiy IT Academy bu nima?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="p"
            sx={{
              //   width: "95%",
              flexShrink: 0,
              color: "#454545",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              //   padding: "20px 30px",
            }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Aliquam eget maximus
            est, id dignissim quam. Aliquam eget maximus est, id dignissim quam.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
