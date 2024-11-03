import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{ marginTop: "20px" }}
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GenericModal;
