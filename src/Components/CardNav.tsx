import { useState } from "react";

import { Tabs, Tab, Box } from "@mui/material";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const tabStyles = {
  textTransform: "capitalize",
  width: "50%",
  maxWidth: 1,
  fontWeight: "bold",
  alignItems: "start",
};

const CardNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Run Definition" {...a11yProps(0)} sx={{ ...tabStyles }} />
        <Tab label="Schedule" {...a11yProps(1)} sx={{ ...tabStyles }} />
      </Tabs>
    </Box>
  );
};
export { CardNav };
