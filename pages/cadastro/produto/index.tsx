import React from "react";
import ProdutoGrid from "@/components/produto/ProdutoGrid";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProduto,
  getAllProdutos,
  Produto,
  updateProduto,
} from "@/services/api/produto/produto-api";
import { Snackbar, Alert, Button, Box } from "@mui/material";
import ModalForm from "@/components/modal/ModalForm";
import CadastroProdutoForm from "@/components/produto/CadastroProdutoForm";
import { showSnackbar } from "@/components/snackbar-notifier/SnackbarNotifier";

const Page: React.FC = () => {
  const [modalFormOpen, setModalFormOpen] = React.useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>("");
  const [selectedProduto, setSelectedProduto] = React.useState<
    Produto | undefined
  >(undefined);

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
      showSnackbar(queryError.message, "error");
    }
  }, [queryError]);

  const mutation = useMutation({
    mutationFn: (produto: Produto) => {
      const isUpdate = produto.id !== undefined;
      return isUpdate
        ? updateProduto(produto.id!, produto)
        : createProduto(produto);
    },
    onSuccess: (data, variables) => {
      const action = variables.id ? "atualizado" : "criado";
      showSnackbar(`Produto ${action} com sucesso.`, "success");
      refetchProdutos();
      setModalFormOpen(false);
    },
    onError: (error: any) => {
      showSnackbar(error.message, "error");
    },
  });

  const handleSubmit = (formData: any) => {
    mutation.mutate(formData);
  };

  const handleEdit = (value: Produto) => {
    setSelectedProduto(value);
    setModalFormOpen(true);
  };

  const showCreateForm = () => {
    setSelectedProduto(undefined);
    setModalFormOpen(true);
  };

  return (
    <>
      <Button variant="contained" onClick={() => showCreateForm()}>
        Cadastrar Produto
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ModalForm
          open={modalFormOpen}
          form={
            <CadastroProdutoForm
              initialValues={selectedProduto}
              onSubmit={(produto) => {
                handleSubmit(produto);
              }}
            />
          }
          onClose={() => setModalFormOpen(false)}
          title="Cadastrar Produto"
        />
        <ProdutoGrid handleEdit={handleEdit} produtos={data || []} />
      </Box>
    </>
  );
};

export default Page;
