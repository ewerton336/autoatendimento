import React from "react";
import { Box, Grid, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#001529",
        padding: "20px 10px", // Ajustar o padding
        color: "#fff",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={4} textAlign="left">
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h1"
            sx={{ display: "inline", marginLeft: "8px" }}
          >
            Voltar
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Typography variant="h5" component="h1" sx={{ margin: 0 }}>
            Auto Atendimento
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign="right">
          <IconButton sx={{ color: "#fff" }}>
            <LogoutIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h1"
            sx={{ display: "inline", marginLeft: "8px" }}
          >
            Sair
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
