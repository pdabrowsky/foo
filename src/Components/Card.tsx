import { Container } from "@mui/material";
import { CardNav } from "./CardNav";
import { CardRunDetails } from "./CardRunDetails";

const Card = () => {
  return (
    <Container
      maxWidth="lg"
      disableGutters={true}
      sx={{ bgcolor: "#FAFAFA", m: "80px auto 0", borderRadius: 2 }}
    >
      <CardNav />
      <CardRunDetails />
    </Container>
  );
};

export { Card };
