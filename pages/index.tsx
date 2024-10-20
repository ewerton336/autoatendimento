import React, { useState } from "react";
// import dynamic from "next/dynamic";
import GenericModal from "@/components/generics/generic-modal";
import QuantidadeForm from "@/components/forms/quantidade/quantidade-form";
import { Col, Row, Button } from "antd";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// const Header = dynamic(() => import("@/components/header/header"), {
//   ssr: false,
// });
// const Footer = dynamic(() => import("@/components/footer/footer"), {
//   ssr: false,
// });

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <Row>
        <Col span={12}>
          <h1 style={{ textAlign: "right" }}> Teste</h1>
        </Col>
        <Col span={12}>
          <h1 style={{ textAlign: "right" }}> Teste</h1>
        </Col>
      </Row>
      <Button type="primary" onClick={showModal}>
        Abrir Modal
      </Button>
      <GenericModal visible={isModalOpen} onClose={closeModal}>
        <QuantidadeForm />
      </GenericModal>
      <Footer totalAmount={10} />
    </div>
  );
};

export default Home;
