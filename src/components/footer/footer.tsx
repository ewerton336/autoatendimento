import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCarrinho } from "@/context/carrinho/CarrinhoContext";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { calcularTotal } = useCarrinho();
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
              Valor Total:
              {" " +
                calcularTotal().toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
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
