import React from "react";
import { Box, Typography, styled, colors } from "@mui/material";
import mainimg from "./cool.png";

const HomePage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",

  "&>div:nth-of-type(1)": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "&>p": {
      fontFamily: "'Dancing Script', cursive",
      fontSize: "36px",
      fontWeight: 600,
    },
    "&>div": {
      "&>img": {
        width: "50px",
        marginLeft: "20px",
      },
    },
  },
  "&>div:nth-of-type(2)": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",

    "&>button": {
      padding: "10px 20px",
      border: "none",
      outline: "none",
      borderRadius: "10px",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
      margin: "10px",
      "&>p": {
        fontFamily: "'Dancing Script', cursive",
        fontSize: "36px",
        fontWeight: 600,
        color: "#fff",
        [theme.breakpoints.down("xsm")]: {
          fontSize: "16px",
        },
      },
    },
  },
}));

const Favme = () => {
  return (
    <HomePage>
      <Box>
        <Typography>Thank You</Typography>{" "}
        <Box>
          <img src={mainimg} alt="emo" />
        </Box>{" "}
      </Box>
    </HomePage>
  );
};

export default Favme;
