import React, { useState } from "react";
import { Box, Grid, Button, TextField } from "@mui/material";

const QuantidadeForm: React.FC = () => {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <Box>
      <Grid
        container
        spacing={5}
        sx={{
          marginTop: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <TextField
            type="number"
            label="Selecione a quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
        </Grid>
        <Grid item>
          <Button
            sx={{ marginRight: "10px" }}
            variant="contained"
            onClick={() => setQuantidade(quantidade + 1)}
          >
            +
          </Button>
          <Button
            variant="contained"
            onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
          >
            -
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuantidadeForm;
