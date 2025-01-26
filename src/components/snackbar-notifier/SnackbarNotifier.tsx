import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

let showSnackbarFn: (
  message: string,
  severity?: "success" | "error" | "info" | "warning"
) => void;

const SnackbarNotifier: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  showSnackbarFn = (message, severity = "info") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbarSeverity}
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

// Exporta a função para exibir o Snackbar
export const showSnackbar = (
  message: string,
  severity?: "success" | "error" | "info" | "warning"
) => {
  if (showSnackbarFn) {
    showSnackbarFn(message, severity);
  }
};

export default SnackbarNotifier;
