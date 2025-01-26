import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface Produto {
  codigoBarras: number;
  nome: string;
  preco: number;
}

interface CadastroProdutoFormProps {
  onSubmit: (produto: Produto) => void;
}

const CadastroProdutoForm: React.FC<CadastroProdutoFormProps> = ({
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm<Produto>();

  const handleFormSubmit = (data: Produto) => {
    sedPressedSubmit(true);
    onSubmit(data);
  };

  const [pressedSubmit, sedPressedSubmit] = React.useState(false);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Controller
          name="codigoBarras"
          control={control}
          defaultValue={0}
          rules={{ required: "Código de barras é obrigatório" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Código de barras"
              type="number"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="nome"
          control={control}
          defaultValue=""
          rules={{ required: "Nome do produto é obrigatório" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Nome do produto"
              type="text"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="preco"
          control={control}
          defaultValue={0}
          rules={{
            required: "Preço é obrigatório",
            min: { value: 0.01, message: "Preço deve ser maior que zero" },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Preço"
              type="number"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />

        <Button
          component="label"
          variant="outlined"
          startIcon={<CloudUploadIcon />}
        >
          Foto do Produto
          <input
            type="file"
            hidden
            onChange={() => console.log("Upload de arquivo")}
          />
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={pressedSubmit}
          loading={pressedSubmit}
        >
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default CadastroProdutoForm;
