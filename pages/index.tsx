import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Grid, Typography, Button } from "@mui/material";
import GenericModal from "@/components/generics/generic-modal";
import QuantidadeForm from "@/components/quantidade/quantidade-form";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

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

      <Typography align="right">
        <Button
          variant="contained"
          color="primary"
          onClick={showModal}
          sx={{ textAlign: "right" }}
        >
          Digitar quantidade
        </Button>
      </Typography>
      <GenericModal
        open={isModalOpen}
        onClose={closeModal}
        title="Digitar quantidade"
      >
        <QuantidadeForm />
      </GenericModal>

      <Footer totalAmount={100} />
    </Box>
  );
};

export default Home;
