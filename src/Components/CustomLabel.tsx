import { ReactNode } from "react";
import { Typography, Box } from "@mui/material";

type CustomLabelProps = {
  children: ReactNode;
  label: string;
};

const CustomLabel = ({ children, label }: CustomLabelProps) => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{ textTransform: "uppercase", mb: "3px" }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
};

export { CustomLabel };
