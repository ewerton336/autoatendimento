import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import GenericModal from "@/components/generics/GenericModal";
import QuantidadeForm from "@/components/quantidade/QuantidadeForm";
import CarrinhoGrid from "@/components/carrinho/carrinhoGrid";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import InputCodigoBarrasProduto from "@/components/produto/InputCodigoBarrasProduto";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTotalAmountChange = (total: number) => {
    setTotalAmount(total);
  };

  return (
    <Box>
      <Header />
      <CarrinhoGrid onTotalAmountChange={handleTotalAmountChange} />

      <InputCodigoBarrasProduto />

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

      <Footer totalAmount={totalAmount} />
    </Box>
  );
};

export default Home;
