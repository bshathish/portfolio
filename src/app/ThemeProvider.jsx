"use client";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { createContext, useContext } from "react";
import { useThemeStore } from "./components/zustand/themeStore";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FE009D",
    },
    navbar:{
      main:'rgba(255,255,255,0.3)'
    },
    timeline:{
      main:'#2f3349'
    },
    themeButton:{
      main:'#2f3349'
    },
    imageBackground:'#C9A9BD',
    background: {
      default: "#f7daec",
      paper: "#ffffff",
      hover: "#856EDF",
      timeRange: "#ffffff",
      textColor: "#363636",
      profilebg:"#cfcccc",
      accordian:"#e9ecf7"
    },
  },
  typography: {
    fontFamily: "'Josefin Sans'",
    allVariants: {
      textTransform: 'none',
      color: "#363636",
    },
    fontSize: 12,

    h1: {
      
      fontSize: 40,
      fontWeight: 600,
    },
    h2: {
      
      fontSize: 35,
      fontWeight: 600,
    },
    h3: {
      fontSize: 30,
      fontWeight: 600,
    },
    h4: {
      fontSize: 25,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 15,
      fontWeight: 600,
    },
  },
  button: {
    allVariants: {
      color: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: { 
        colorPrimary: {
          background: '#ffffff !important',
          color: '#FFFFF7 !important',
        }
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          fontSize:13
        }
      }
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FE009D",
    },
    navbar:{
      main:'rgba(0,0,0,0.3)'
    },
    timeline:{
      main:'#fafafa'
    },
    themeButton:{
      main:'#edc5de'
    },
    imageBackground:'#1d202e',
    background: {
      default: "#2f3349",
      paper: "#25293C",
      hover: "#856EDF",
      timeRange: "#303654",
      textColor: "#fafafa",
      profilebg:"#545151",
      accordian:"#1f2336"
    },
  },
  typography: {
    fontFamily: "'Josefin Sans'",
    allVariants: {
      textTransform: 'none', // Set text to lowercase
      color: "#fafafa",
    },
    fontSize: 12,

    h1: {
      
      fontSize: 40,
      fontWeight: 600,
    },
    h2: {
      
      fontSize: 35,
      fontWeight: 600,
    },
    h3: {
      
      fontSize: 30,
      fontWeight: 600,
    },
    h4: {
      
      fontSize: 25,
      fontWeight: 600,
    },
    h5: {
      
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      
      fontSize: 15,
      fontWeight: 600,
    },
  },
  button: {
    allVariants: {
      color: "#f2f5f6",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: '#25293C !important',
          color: '#edeff2 !important',
        }
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          fontSize:13
        }
      }
    }
  }
});

const ThemeContext = createContext();
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeWrapper = ({ children }) => {
  const {colorScheme, setColorScheme} = useThemeStore();
  const handleThemeToggle = () => {
    setColorScheme();
  };

  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ toggleTheme: handleThemeToggle }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
