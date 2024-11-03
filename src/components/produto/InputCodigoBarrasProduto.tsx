import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { getProdutoByCodigoBarras } from "@/services/api/produto/produto-api";

const InputCodigoBarrasProduto: React.FC = () => {
  const [codigoBarras, setCodigoBarras] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const ensureFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    ensureFocus();

    const handleBlur = () => {
      setTimeout(() => {
        if (document.activeElement !== inputRef.current) {
          ensureFocus();
        }
      }, 0);
    };

    const currentInput = inputRef.current;
    if (currentInput) {
      currentInput.addEventListener("blur", handleBlur);
    }

    return () => {
      if (currentInput) {
        currentInput.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

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
    ensureFocus();
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Código de barras"
        variant="standard"
        value={codigoBarras}
        onChange={handleChange}
        inputRef={inputRef}
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
