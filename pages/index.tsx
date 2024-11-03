import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import GenericModal from "@/components/generics/GenericModal";
import QuantidadeForm from "@/components/quantidade/QuantidadeForm";
import CarrinhoGrid from "@/components/carrinho/carrinhoGrid";

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
      <CarrinhoGrid />

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
