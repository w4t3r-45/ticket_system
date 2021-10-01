import { createTheme } from "@mui/material";

export const rallyLight = createTheme({
  mixins: {
    toolbar: {
      minHeight: 50,
      // backgroundColor: "#CEEAE6"
      backgroundColor: "#fff"
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: "#291B4F",
      light: "#ece7f7"
    },
    secondary: {
      main: "#291B4F" //will change it soon
    },
    background: {
      paper: "#fff",
      default: "#EEEEEE"
    },
    text: {
      disabled: "#C1C7C9"
    }
  }, //must be another name "Rally" just for testing purpose
  typography: {
    fontFamily: "'Roboto Condensed', sans-serif",
    h1: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: "300",
      fontSize: 96
    },
    h2: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: "300",
      fontSize: 60
    },
    h4: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "300",
      fontSize: 34
    },
    h5: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "400",
      fontSize: 24
    },
    h6: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "100",
      fontSize: 12
    },
    subtitle1: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "400",
      fontSize: 16
    },
    subtitle2: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "400",
      fontSize: 14
    },
    body2: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "300",
      fontSize: 14
    },
    button: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "700",
      fontSize: 14
    },
    caption: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "400",
      fontSize: 12
    },
    overline: {
      fontFamily: " 'Roboto Condensed', sans-serif",
      fontWeight: "400",
      fontSize: 10
    }
  },
  shape: {
    borderRadius: 2
  },
  shadows: [
    "none", //elevation(0) represented by shadows[0]
    "0px 2px 1px -10px rgba(0,0,0,0.1),0px 1px 2px 0px rgba(0,0,0,0.1),0px 1px 2px 0px rgba(0,0,0,0.1)", //elevation(1)
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)", //elevation(2)
    "0px 3px 10px -20px rgba(0,0,0,0.1),0px 3px 20px 0px rgba(0,0,0,0.1),0px 1px 10px 0px rgba(0,0,0,0.1)", //elevation(3)
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    "0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
    "0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)"
  ]
});
