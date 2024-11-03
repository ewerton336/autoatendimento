import React, { createContext, useContext, useState, ReactNode } from "react";
import { Produto } from "@/services/api/produto/produto-api";

interface CarrinhoItem extends Produto {
  quantidade: number;
  total: number;
}

interface CarrinhoContextType {
  carrinhoItens: CarrinhoItem[];
  adicionarItemAoCarrinho: (produto: Produto, quantidade: number) => void;
  calcularTotal: () => number;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(
  undefined
);

export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [carrinhoItens, setCarrinhoItens] = useState<CarrinhoItem[]>([]);

  const adicionarItemAoCarrinho = (produto: Produto, quantidade: number) => {
    const novoItem: CarrinhoItem = {
      ...produto,
      quantidade,
      total: produto.preco * quantidade,
    };

    setCarrinhoItens((prevItens) => [...prevItens, novoItem]);
  };

  const calcularTotal = () => {
    return carrinhoItens.reduce((sum, item) => sum + item.total, 0);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinhoItens, adicionarItemAoCarrinho, calcularTotal }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = (): CarrinhoContextType => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
};
