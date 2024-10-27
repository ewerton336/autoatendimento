import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface FooterProps {
  totalAmount: number;
}

const Footer: React.FC<FooterProps> = ({ totalAmount }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#722ed1",
        padding: "0.5% 0%",
        color: "#fff",
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8} textAlign="left">
          <Grid item xs={8}>
            <Typography variant="h4" sx={{ padding: "1% 1%" }}>
              Valor Total: R${totalAmount}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4} textAlign="right">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            sx={{ padding: "4% 1%", marginRight: "1%" }}
          >
            <Typography sx={{ fontSize: "200%" }} component="span">
              Finalizar
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
