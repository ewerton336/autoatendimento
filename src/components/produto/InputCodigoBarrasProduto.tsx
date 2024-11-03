import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  getProdutoByCodigoBarras,
  Produto,
} from "@/services/api/produto/produto-api";

const InputCodigoBarrasProduto: React.FC = () => {
  const [codigoBarras, setCodigoBarras] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setCodigoBarras(value);

      if (value.length === 6) {
        handleSubmit(value);
      }
    }
  };

  const handleSubmit = async (codigoBarras: string) => {
    const produto = await getProdutoByCodigoBarras(codigoBarras);
    console.log(
      "Código de barras submetido:",
      codigoBarras,
      "Produto encontrado:",
      produto
    );
    setCodigoBarras("");
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Código de barras"
        variant="standard"
        value={codigoBarras}
        onChange={handleChange}
        slotProps={{
          input: {
            inputMode: "numeric",
          },
        }}
      />
    </div>
  );
};

export default InputCodigoBarrasProduto;
