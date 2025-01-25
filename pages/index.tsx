import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, Modal } from "@mui/material";
import GenericModal from "@/components/generics/GenericModal";
import QuantidadeForm from "@/components/quantidade/QuantidadeForm";
import CarrinhoGrid from "@/components/carrinho/carrinhoGrid";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import InputCodigoBarrasProduto from "@/components/produto/InputCodigoBarrasProduto";
import { CarrinhoProvider } from "@/context/carrinho/CarrinhoContext";
import { useQuery } from "@tanstack/react-query";
import { getProdutoByCodigoBarras } from "@/services/api/produto/produto-api";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);

  const [codigoBarras, setCodigoBarras] = useState<string>("");

  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    data,
    isLoading,
    error,
    refetch: refetchProduto,
  } = useQuery({
    queryKey: [codigoBarras],
    queryFn: () => getProdutoByCodigoBarras(codigoBarras),
    enabled: false,
    staleTime: 5 * 60 * 1000,
  });

  const fetchProdutoByCodigoBarras = async (codigo: string) => {
    await setCodigoBarras(codigo);
    const { data } = await refetchProduto();
    return data;
  };

  useEffect(() => {
    if (error) {
      setErrorMessage((error as Error).message || "Erro ao buscar o produto.");
      setOpenErrorModal(true);
    }
  }, [error]);

  return (
    <Box>
      <Header />
      <CarrinhoProvider>
        <CarrinhoGrid />
        <InputCodigoBarrasProduto
          quantidadePadrao={quantidadeProduto}
          setQuantidade={setQuantidadeProduto}
          fetchProdutoByCodigoBarras={fetchProdutoByCodigoBarras} // Passa a função
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
