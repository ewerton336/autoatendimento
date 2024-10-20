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
        padding: "10px 10px",
        color: "#fff",
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={11} textAlign="left" alignItems="center">
          <Typography variant="h6" sx={{ marginLeft: "5px" }}>
            Valor Total: R${totalAmount}
          </Typography>
        </Grid>
        <Grid item xs={11} textAlign="right" sx={{ marginRight: "50px" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            sx={{ padding: "30px 20px" }}
          >
            <Typography sx={{ padding: "0px 30px" }} component="span">
              Finalizar
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
