import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xsm: 350,
      ssm: 500,
      sm: 600,
      msm: 700,
      lsm: 800,
      md: 900,
      lmd: 1024,
      slg: 1100,
      lg: 1200,
      xl: 1920,
    },
  },
  // other theme configurations
});

export default customTheme;
