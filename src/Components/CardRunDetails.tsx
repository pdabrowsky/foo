import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  experimental_sx as sx,
} from "@mui/material/styles";

import {
  Typography,
  Box,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const CardRunDetails = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
        contrastText: "#fff",
      },
    },
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: sx({ color: "#000000" }),
        },
      },
    },
  });

  const [instrument, setInstrument] = useState("1");

  const handleChangeIntrument = (event: SelectChangeEvent) => {
    setInstrument(event.target.value as string);
  };
  const [reads, setReads] = useState("1");

  const handleChangeReads = (
    event: React.MouseEvent<HTMLElement>,
    newReads: string
  ) => {
    setReads(newReads);
  };
  return (
    <Grid container spacing={3} sx={{ pt: 2 }}>
      <Grid item sm={2}>
        <Typography
          variant="body2"
          sx={{ textTransform: "uppercase", pt: 1.5 }}
        >
          Run <br />
          Details &
          <br /> Type
        </Typography>
      </Grid>
      <Grid item sm={10} sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="form__name"
          label="NAME"
          defaultValue=""
          helperText="Name can cointain 255..."
        />
        <FormControl fullWidth sx={{ mt: 3 }}>
          <InputLabel id="select-label" sx={{ textTransform: "uppercase" }}>
            Instrument type
          </InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={instrument}
            label="Instrument type"
            onChange={handleChangeIntrument}
            sx={{ maxWidth: 300 }}
            defaultValue="1"
          >
            <MenuItem value={1}>Singular G4</MenuItem>
          </Select>
        </FormControl>
        <Box>
          <ThemeProvider theme={darkTheme}>
            <ToggleButtonGroup
              color="primary"
              value={reads}
              exclusive
              onChange={handleChangeReads}
              aria-label="Platform"
            >
              <ToggleButton value="1">Single</ToggleButton>
              <ToggleButton value="2">Paired</ToggleButton>
            </ToggleButtonGroup>
          </ThemeProvider>
          <ToggleButtonGroup
            color="primary"
            value={reads}
            exclusive
            onChange={handleChangeReads}
            aria-label="Platform"
          >
            <ToggleButton value="1">Single</ToggleButton>
            <ToggleButton value="2">Paired</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>
    </Grid>
  );
};
export { CardRunDetails };
