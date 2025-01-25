import * as React from "react";
import ProdutoGrid from "@/components/produto/ProdutoGrid";
import { useQuery } from "@tanstack/react-query";
import { getAllProdutos } from "@/services/api/produto/produto-api";
import { Snackbar, Alert } from "@mui/material";

const Page: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);

  const { data, error: queryError } = useQuery({
    queryKey: ["ListProdutos"],
    queryFn: getAllProdutos,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

  React.useEffect(() => {
    if (queryError instanceof Error) {
      const message =
        queryError.message || "An error occurred while fetching products.";
      setError(message);
    }
  }, [queryError]);

  const handleCloseSnackbar = () => {
    setError(null);
  };

  const handleEdit = (id: number) => {};

  return (
    <>
      <ProdutoGrid handleEdit={handleEdit} produtos={data || []} />
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Page;
