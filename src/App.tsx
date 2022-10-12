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
