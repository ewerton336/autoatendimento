import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";

const Header: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#001529",
          padding: "20px 10px",
          color: "#fff",
          position: "fixed",
          top: 0,
          width: "100%",
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={3} textAlign="left">
            <IconButton sx={{ color: "#fff" }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="h1"
              sx={{ display: "inline", marginLeft: "0px" }}
            >
              Voltar
            </Typography>
          </Grid>
          <Grid item xs={3} textAlign="center">
            <Typography variant="h5" component="h1" sx={{ margin: 0 }}>
              Auto Atendimento
            </Typography>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <IconButton sx={{ color: "#fff" }}>
              <LogoutIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="h1"
              sx={{
                display: "inline",
                marginRight: "30px",
                whiteSpace: "nowrap",
              }}
            >
              Sair
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* Box para espaçar o próximo conteúdo */}
      <Box sx={{ height: "80px" }} />
    </>
  );
};

export default Header;
