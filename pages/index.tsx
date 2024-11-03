import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import GenericModal from "@/components/generics/GenericModal";
import QuantidadeForm from "@/components/quantidade/QuantidadeForm";
import CarrinhoGrid from "@/components/carrinho/carrinhoGrid";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import InputCodigoBarrasProduto from "@/components/produto/InputCodigoBarrasProduto";
import { CarrinhoProvider } from "@/context/carrinho/CarrinhoContext";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Header />
      <CarrinhoProvider>
        <CarrinhoGrid />
        <InputCodigoBarrasProduto
          quantidadePadrao={quantidadeProduto}
          setQuantidade={setQuantidadeProduto}
        />

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
          <QuantidadeForm
            quantidade={quantidadeProduto}
            setQuantidade={setQuantidadeProduto}
          />
        </GenericModal>
        <Footer />
      </CarrinhoProvider>
    </Box>
  );
};

export default Home;
