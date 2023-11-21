import React, { useState } from "react";
import {
  Box,
  Typography,
  styled,
  colors,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import mainimg from "./emoji.png";
import { useNavigate } from "react-router-dom";

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

const Home = () => {
  const [stateCon, setStateCon] = useState(false);
  const navigate = useNavigate();

  const handleme = () => {
    setStateCon(true);
  };

  const handleClose = () => {
    setStateCon(false);
  };
  return (
    <HomePage>
      <Box>
        <Typography>Oyyyy, Sorry</Typography>{" "}
        <Box>
          <img src={mainimg} alt="emo" />
        </Box>{" "}
      </Box>
      <Box>
        <button
          style={{ backgroundColor: "#0B5DD5" }}
          onClick={() => navigate("/approve")}
        >
          <Typography>Accepted</Typography>
        </button>
        <button
          style={{ backgroundColor: "#FC004C" }}
          onClick={() => handleme()}
        >
          <Typography>Rejected</Typography>
        </button>
      </Box>
      <Dialog
        open={stateCon}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hellooooo..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Try Again !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </HomePage>
  );
};

export default Home;
