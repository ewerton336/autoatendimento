import React from "react";
import { Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface FooterProps {
  totalAmount: number;
}

const Footer: React.FC<FooterProps> = ({ totalAmount }) => {
  return (
    <div
      style={{
        backgroundColor: "#722ed1",
        padding: "10px 10px",
        color: "#fff",
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Row justify="space-between" align="middle">
        <Col style={{ textAlign: "left" }} span={11}>
          <h1 style={{ marginLeft: "5px" }}>Valor Total: R${totalAmount}</h1>
        </Col>
        <Col style={{ textAlign: "right", marginRight: "50px" }} span={11}>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            style={{ padding: "30px 20px" }}
          >
            <h1>Finalizar</h1>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
