import "./App.css";
import { Card } from "./Components/Card";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      paper: "#FAFAFA",
    },
    text: {
      primary: "#5A5A5A",
      secondary: "#46505A",
    },
    primary: {
      main: "#000000",
    },
  },
  typography: {
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: "11.5px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: "bold",
          borderRadius: 8,
          "&.Mui-selected": {
            color: "white",
            "background-color": "#222222",
          },
          "&.Mui-selected:hover": {
            "background-color": "#5A5A5A",
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          "& .MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-grouped": {
            "border-radius": "6px",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card />
    </ThemeProvider>
  );
}

export default App;
