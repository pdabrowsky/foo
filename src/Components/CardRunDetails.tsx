import { useState } from "react";

import {
  Typography,
  Box,
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
  Container,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { CustomLabel } from "./CustomLabel";

const CardRunDetails = () => {
  const [instrument, setInstrument] = useState("1");

  const handleChangeIntrument = (event: SelectChangeEvent) => {
    setInstrument(event.target.value as string);
  };
  const [reads, setReads] = useState("1");

  const handleReadsChange = (
    event: React.MouseEvent<HTMLElement>,
    newReads: string
  ) => {
    setReads(newReads);
  };
  const [index, setIndex] = useState("0");

  const handleIndexChange = (
    event: React.MouseEvent<HTMLElement>,
    newIndex: string
  ) => {
    setIndex(newIndex);
  };
  return (
    <Grid container spacing={3} sx={{ pt: 3 }}>
      <Grid item sm={2} sx={{ borderRight: "1px solid #D3D3D3" }}>
        <Typography
          variant="body1"
          sx={{ textTransform: "uppercase", pt: 1.5, pl: 2, fontWeight: 600 }}
        >
          Run <br />
          Details &
          <br /> Type
        </Typography>
      </Grid>
      <Grid item sm={10} sx={{ display: "flex", flexDirection: "column" }}>
        <Container maxWidth="md" disableGutters={true} sx={{ m: 0 }}>
          <CustomLabel label="name">
            <TextField
              id="form__name"
              helperText="Name can cointain 255..."
              sx={{ width: 1 }}
            />
          </CustomLabel>

          <FormControl fullWidth sx={{ mt: 3 }}>
            <CustomLabel label="instrument type">
              <Select
                labelId="select-label"
                id="simple-select"
                value={instrument}
                onChange={handleChangeIntrument}
                sx={{ width: 0.5 }}
                defaultValue="1"
              >
                <MenuItem value={1}>Singular G4</MenuItem>
              </Select>
            </CustomLabel>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <CustomLabel label="reads">
              <ToggleButtonGroup
                color="primary"
                value={reads}
                exclusive
                onChange={handleReadsChange}
                aria-label="Platform"
              >
                <ToggleButton value="1">Single</ToggleButton>
                <ToggleButton value="2">Paired</ToggleButton>
              </ToggleButtonGroup>
            </CustomLabel>
            <CustomLabel label="index">
              <ToggleButtonGroup
                color="primary"
                value={index}
                exclusive
                onChange={handleIndexChange}
                aria-label="Platform"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ToggleButton value="0" sx={{ px: 4 }}>
                  None
                </ToggleButton>
                <ToggleButton value="1" sx={{ px: 4 }}>
                  1
                </ToggleButton>
                <ToggleButton value="2" sx={{ px: 4 }}>
                  2
                </ToggleButton>
                <InfoOutlinedIcon sx={{ ml: 1 }} />
              </ToggleButtonGroup>
            </CustomLabel>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
export { CardRunDetails };
