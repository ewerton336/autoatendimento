import React from "react";
import { Button, Modal } from "antd";

interface GenericModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const GenericModal: React.FC<GenericModalProps> = ({
  visible,
  onClose,
  children,
  title,
}) => {
  return (
    <Modal title={title} open={visible} onCancel={onClose} footer={null}>
      {children}
      <Button type="primary" onClick={onClose} style={{ marginTop: "20px" }}>
        Fechar
      </Button>
    </Modal>
  );
};

export default GenericModal;
