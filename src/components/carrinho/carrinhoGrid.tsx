import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllProdutos, Produto } from "@/services/api/produto/produto-api";

interface CarrinhoItem {
  nome: string;
  valor: number;
  quantidade: number;
  codigoBarras: string;
  total: number;
}

export default function CarrinhoGrid() {
  const [carrinhoItens, setCarrinhoItens] = React.useState<CarrinhoItem[]>([]);

  function AddCarrinhoItem(produto: Produto) {
    const novoItem: CarrinhoItem = {
      nome: produto.nome,
      valor: produto.preco,
      quantidade: 1,
      codigoBarras: produto.codigoBarras,
      total: produto.preco * 1,
    };

    setCarrinhoItens((prevItens) => [...prevItens, novoItem]);
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
            <TableCell align="center">Subtotal</TableCell>
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
