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

interface ModalFormProps {
  open: boolean;
  onClose: () => void;
  form: React.ReactNode;
  title?: string;
  buttons?: React.ReactNode;
}

const ModalForm: React.FC<ModalFormProps> = ({
  open,
  onClose,
  form,
  title,
  buttons,
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
      <DialogContent>{form}</DialogContent>
      <DialogActions>
        {buttons ? (
          buttons
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={onClose}
            sx={{ marginTop: "20px" }}
          >
            Fechar
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalForm;
