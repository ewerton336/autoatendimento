import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Grid, Typography, Button } from "@mui/material";
import GenericModal from "@/components/generics/generic-modal";
import QuantidadeForm from "@/components/forms/quantidade/quantidade-form";

// Dinamicamente importando Header e Footer com SSR desabilitado
const Header = dynamic(() => import("@/components/header/header"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/footer/footer"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" align="right">
            Teste
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" align="right">
            Teste
          </Typography>
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={showModal}>
        Abrir Modal
      </Button>

      <GenericModal open={isModalOpen} onClose={closeModal}>
        <QuantidadeForm />
      </GenericModal>

      <Footer totalAmount={10} />
    </Box>
  );
};

export default Home;
