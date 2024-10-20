import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
} from "@mui/material";

interface GenericModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const GenericModal: React.FC<GenericModalProps> = ({
  open,
  onClose,
  children,
  title,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{ marginTop: "20px" }}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GenericModal;
