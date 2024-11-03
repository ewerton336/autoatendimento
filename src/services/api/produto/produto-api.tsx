import { mock } from "node:test";
import { useGenericCrudAPI } from "../generic/generic-crud-api";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  codigoBarras: string;
}

export const getAllProdutos = async (): Promise<Produto[]> => {
  const { getAll } = useGenericCrudAPI<Produto>("produto");
  try {
    return mockGetAllProdutos();
    const data = await getAll();
    return data;
  } catch (err) {
    throw new Error("Failed to load products");
  }
};

export const mockGetAllProdutos = async (): Promise<Produto[]> => {
  return [
    {
      id: 1,
      nome: "Produto 1",
      preco: 10.0,
      codigoBarras: "123456789",
    },
    {
      id: 2,
      nome: "Produto 2",
      preco: 20.0,
      codigoBarras: "987654321",
    },
  ];
};

export const getProdutoById = async (id: number): Promise<Produto> => {
  const { getById } = useGenericCrudAPI<Produto>("produto");
  try {
    const data = await getById(id);
    return data;
  } catch (err) {
    throw new Error("Failed to load product");
  }
};

export const getProdutoByCodigoBarras = async (
  codigoBarras: string
): Promise<Produto> => {
  const { getBySpecificField } = useGenericCrudAPI<Produto>(
    `produto/${codigoBarras}`
  );
  try {
    const data = await getBySpecificField(codigoBarras);
    return data;
  } catch (err) {
    throw new Error("Failed to load product");
  }
};
