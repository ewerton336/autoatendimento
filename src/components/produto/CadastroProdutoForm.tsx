import { Button, Grid2, styled, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import react from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CadastroProdutoForm: React.FC = () => {
  return (
    <div>
      <Grid2 container spacing={12}>
        <TextField label="Código de barras" type="number" variant="standard" />
        <TextField label="Nome do produto" type="text" variant="standard" />
        <TextField label="Preço" type="number" variant="standard" />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={() => console.log()}
            multiple
          />
        </Button>
      </Grid2>
    </div>
  );
};

export default CadastroProdutoForm;
