import { createTheme } from "@mui/material";

export const rallyLight = createTheme({
  mixins: {
    toolbar: {
      minHeight: 50
    }
  },
  palette: {
    mode: "light", //must be another name "Rally" just for testing purpose
    primary: {
      main: "#25b983",
      light: "#3eeebc",
      dark: "#087d54",
      contrastText: "#fff"
    },
    secondary: {
      main: "#0faea4",
      light: "#59d1ca", //not used in rally
      dark: "#085d56", //not used in rally
      contrastText: "#fff"
    },
    error: {
      main: "#fe867e",
      light: "#ffd7d1",
      dark: "#fe695d",
      contrastText: "#fff"
    },
    warning: {
      main: "#ffcf56",
      light: "#ffdc81",
      dark: "#ffdc81",
      contrastText: "#fff"
    },
    info: {
      main: "#b05efa",
      light: "#b05efa",
      dark: "#b05efa",
      contrastText: "#fff"
    },
    success: {
      main: "#74defd",
      light: "#b3f2fe",
      dark: "#0382f6",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.12)"
    },
    background: {
      paper: "#fff",
      default: "#fff"
    },
    action: {
      active: "rgba(37, 185, 131, 0.54)",
      hover: "rgba( 37, 185, 131, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba( 37, 185, 131, 0.14)",
      disabled: "rgba( 37, 185, 131, 0.26)",
      disabledBackground: "rgba( 37, 185, 131, 0.12)",
      focus: "rgba( 37, 185, 131, 0.12)"
    }
  },
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
    h3: {
      fontFamily: "'Eczar', serif",
      fontWeight: "400",
      fontSize: 48
    }, //ECZAR
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
      fontWeight: "400",
      fontSize: 20
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
    body1: {
      fontFamily: " 'Eczar', serif",
      fontWeight: "400",
      fontSize: 16
    }, //ECZAR
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
  }
});

export const rallyDark = createTheme({
  mixins: {
    toolbar: {
      minHeight: 50,
      backgroundColor: "rgba(39, 39, 47, 1)"
    }
  },
  palette: {
    mode: "dark", //must be another name "Rally" just for testing purpose
    primary: {
      main: "#25b983",
      light: "#3eeebc",
      dark: "#087d54",
      contrastText: "rgba(0,0,0,0.87)"
    },
    secondary: {
      main: "#0faea4",
      light: "#59d1ca", //not used in rally
      dark: "#085d56", //not used in rally
      contrastText: "rgba(0,0,0,0.87)"
    },
    error: {
      main: "#fe867e",
      light: "#ffd7d1",
      dark: "#fe695d",
      contrastText: "rgba(0,0,0,0.87)"
    },
    warning: {
      main: "#ffcf56",
      light: "#ffdc81",
      dark: "#ffdc81",
      contrastText: "rgba(0,0,0,0.87)"
    },
    info: {
      main: "#b05efa",
      light: "#b05efa",
      dark: "#b05efa",
      contrastText: "rgba(0,0,0,0.87)"
    },
    success: {
      main: "#74defd",
      light: "#b3f2fe",
      dark: "#0382f6",
      contrastText: "rgba(0,0,0,0.87)"
    },
    text: {
      primary: "rgba(255,255,255,0.7)", // this is hover color  and text color same time (???????)
      secondary: "rgba(0255, 255, 255, 0.5)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.12)"
    },
    background: {
      paper: "rgba(55, 55, 64, 1)",
      default: "rgba(51, 51, 61, 1)" //must add cssbaseline to use those colors
    },
    action: {
      active: "#fff",
      hover: "rgba( 255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba( 255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba( 255, 255, 255, 0.3)",
      disabledBackground: "rgba( 255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba( 255, 255, 255, 0.12)",
      focusOpacity: 0.12
    },
    divider: "rgba(39, 39, 47, 1)"
  },
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
    h3: {
      fontFamily: "'Eczar', serif",
      fontWeight: "400",
      fontSize: 48
    }, //ECZAR
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
      fontWeight: "400",
      fontSize: 20
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
    body1: {
      fontFamily: " 'Eczar', serif",
      fontWeight: "400",
      fontSize: 16
    }, //ECZAR
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
  components: {
    Paper: {
      defaultProps: {
        elevation: 0
      }
    }
  }
});
