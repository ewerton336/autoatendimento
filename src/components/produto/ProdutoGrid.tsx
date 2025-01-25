import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Produto } from "@/services/api/produto/produto-api";

interface ProdutoGridProps {
  produtos: Produto[];
  handleEdit: (id: number) => void;
}

const ProdutoGrid: React.FC<ProdutoGridProps> = ({ produtos, handleEdit }) => {
  const columns: GridColDef<(typeof produtos)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nome",
      headerName: "Nome do Produto",
      width: 150,
    },
    {
      field: "valor",
      headerName: "Valor",
      width: 150,
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
            onClick={() => handleEdit(params.row.id as number)}
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
    <Box sx={{ alignItems: "center", height: "75%", width: "50%" }}>
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
