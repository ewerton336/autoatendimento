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
import { useCarrinho } from "@/context/carrinho/CarrinhoContext";

export default function CarrinhoGrid({}) {
  const { carrinhoItens, calcularTotal } = useCarrinho();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Valor Unitário</TableCell>
            <TableCell align="center">Código de Barras</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carrinhoItens.map((carrinhoItem) => (
            <TableRow
              key={carrinhoItem.id}
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
