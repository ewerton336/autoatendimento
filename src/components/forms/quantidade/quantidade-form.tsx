import React, { useState } from "react";
import { Box, Grid, Button, TextField } from "@mui/material";

const QuantidadeForm: React.FC = () => {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => setQuantidade(1)}>
            1
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setQuantidade(2)}>
            2
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setQuantidade(3)}>
            3
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item>
          <Button variant="contained" onClick={() => setQuantidade(6)}>
            6
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setQuantidade(12)}>
            12
          </Button>
        </Grid>
        <Grid item>
          <TextField
            type="number"
            label="Outra quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuantidadeForm;
