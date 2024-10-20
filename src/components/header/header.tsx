import React from "react";
import { Row, Col, Button } from "antd";
import { LeftOutlined, LogoutOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#001529",
        padding: "20px 10px", // Ajustar o padding
        color: "#fff",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col style={{ textAlign: "left" }} span={8}>
          <Button type="link" icon={<LeftOutlined />} style={{ color: "#fff" }}>
            <h1>Voltar</h1>
          </Button>
        </Col>
        <Col style={{ textAlign: "center" }} span={8}>
          <h1 style={{ margin: 0 }}>Auto Atendimento</h1>
        </Col>
        <Col style={{ textAlign: "right" }} span={8}>
          <Button
            type="link"
            icon={<LogoutOutlined />}
            style={{ color: "#fff" }}
          >
            <h1>Sair</h1>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
