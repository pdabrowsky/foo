import { Container } from "@mui/material";
import { CardNav } from "./CardNav";
import { CardRunDetails } from "./CardRunDetails";

const Card = () => {
  return (
    <Container maxWidth="lg" sx={{ mx: 1, bgcolor: "#FAFAFA" }}>
      <CardNav />
      <CardRunDetails />
    </Container>
  );
};

export { Card };
