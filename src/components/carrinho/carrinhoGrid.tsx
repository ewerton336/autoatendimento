import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getAllProdutos, Produto } from "@/services/api/produto/produto-api";

interface CarrinhoItem {
  nome: string;
  valor: number;
  quantidade: number;
  codigoBarras: string;
  total: number;
}

interface CarrinhoGridProps {
  onTotalAmountChange: (total: number) => void;
}

export default function CarrinhoGrid({
  onTotalAmountChange,
}: CarrinhoGridProps) {
  const [carrinhoItens, setCarrinhoItens] = React.useState<CarrinhoItem[]>([]);

  function AddCarrinhoItem(produto: Produto) {
    const novoItem: CarrinhoItem = {
      nome: produto.nome,
      valor: produto.preco,
      quantidade: 1,
      codigoBarras: produto.codigoBarras,
      total: produto.preco * 1,
    };

    setCarrinhoItens((prevItens) => {
      const updatedItems = [...prevItens, novoItem];
      const totalAmount = updatedItems.reduce(
        (sum, item) => sum + item.total,
        0
      );
      onTotalAmountChange(totalAmount);
      return updatedItems;
    });
  }

  React.useEffect(() => {
    const popularCarrinho = async () => {
      const produtos = await getAllProdutos();
      produtos.forEach((produto) => {
        AddCarrinhoItem(produto);
      });
    };

    popularCarrinho();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Código de Barras</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carrinhoItens.map((carrinhoItem) => (
            <TableRow
              key={carrinhoItem.nome}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {carrinhoItem.nome}
              </TableCell>
              <TableCell align="center">{carrinhoItem.quantidade}</TableCell>
              <TableCell align="center">
                {carrinhoItem.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell align="center">{carrinhoItem.codigoBarras}</TableCell>
              <TableCell align="center">
                {carrinhoItem.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
