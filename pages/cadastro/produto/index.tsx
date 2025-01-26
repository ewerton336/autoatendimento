import React from "react";
import ProdutoGrid from "@/components/produto/ProdutoGrid";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProduto,
  getAllProdutos,
  Produto,
} from "@/services/api/produto/produto-api";
import { Snackbar, Alert, Button } from "@mui/material";
import ModalForm from "@/components/modal/ModalForm";
import CadastroProdutoForm from "@/components/produto/CadastroProdutoForm";

const Page: React.FC = () => {
  const [modalFormOpen, setModalFormOpen] = React.useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>("");

  const {
    data,
    error: queryError,
    refetch: refetchProdutos,
  } = useQuery({
    queryKey: ["ListProdutos"],
    queryFn: getAllProdutos,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

  React.useEffect(() => {
    if (queryError instanceof Error) {
      setSnackbarMessage(queryError.message);
      setSnackbarOpen(true);
    }
  }, [queryError]);

  const mutation = useMutation({
    mutationFn: (produto: Produto) => createProduto(produto),
    onSuccess: () => {
      setSnackbarMessage("Produto criado com sucesso!");
      setSnackbarOpen(true);
      refetchProdutos();
      setModalFormOpen(false);
    },
    onError: (error: any) => {
      setSnackbarMessage(error.message || "Erro ao criar produto.");
      setSnackbarOpen(true);
    },
  });

  const handleSubmit = (formData: any) => {
    mutation.mutate(formData);
  };

  const handleEdit = (id: number) => {};

  return (
    <>
      <Button variant="contained" onClick={() => setModalFormOpen(true)}>
        Cadastrar Produto
      </Button>
      <ModalForm
        open={modalFormOpen}
        form={
          <CadastroProdutoForm
            onSubmit={(produto) => {
              handleSubmit(produto);
            }}
          />
        }
        onClose={() => setModalFormOpen(false)}
        title="Cadastrar Produto"
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      <ProdutoGrid handleEdit={handleEdit} produtos={data || []} />
    </>
  );
};

export default Page;
