import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Produto } from "@/services/api/produto/produto-api";

interface ProdutoGridProps {
  produtos: Produto[];
  handleEdit: (value: Produto) => void;
}

const ProdutoGrid: React.FC<ProdutoGridProps> = ({ produtos, handleEdit }) => {
  const columns: GridColDef<(typeof produtos)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nome",
      headerName: "Nome do Produto",
      width: 350,
    },
    {
      field: "valor",
      headerName: "Valor",
      width: 100,
    },
    {
      field: "codigoBarras",
      headerName: "Código de Barras",
      type: "number",
      width: 150,
    },
    {
      field: "acoes",
      headerName: "Ações",
      width: 150,
      renderCell: (params) => (
        <strong>
          <button
            onClick={() => handleEdit(params.row)}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Editar
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Excluir
          </button>
        </strong>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "55vw", // Define uma largura para o DataGrid
        height: "50vh", // Define uma altura para o DataGrid
      }}
    >
      <DataGrid
        rows={produtos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
export default ProdutoGrid;
