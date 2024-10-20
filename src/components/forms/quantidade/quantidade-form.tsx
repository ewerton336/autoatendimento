import React, { useState } from "react";
import { Row, Button, Input } from "antd";

const QuantidadeForm: React.FC = () => {
  const [quantidade, setQuantidade] = useState(1);
  return (
    <div>
      <Row>
        <Button onClick={() => setQuantidade(1)}>1</Button>
        <Button onClick={() => setQuantidade(2)}>2</Button>
        <Button onClick={() => setQuantidade(3)}>3</Button>
      </Row>
      <Row>
        <Button onClick={() => setQuantidade(6)}>6</Button>
        <Button onClick={() => setQuantidade(12)}>12</Button>
        <Input
          type="number"
          placeholder="Outra quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
        />
      </Row>
    </div>
  );
};

export default QuantidadeForm;
