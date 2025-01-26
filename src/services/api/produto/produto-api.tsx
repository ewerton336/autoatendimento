import { createGenericCrudAPI } from "../generic/generic-crud-api";

export interface Produto {
  id: number;
  nome: string;
  valor: number;
  codigoBarras: string;
}

const produtoAPI = createGenericCrudAPI<Produto>("produto");

export const getAllProdutos = async (): Promise<Produto[]> => {
  try {
    return await produtoAPI.getAll();
  } catch (err) {
    throw new Error("Failed to load products");
  }
};

export const MockGetAllProdutos = async (): Promise<Produto[]> => {
  return [
    {
      id: 1,
      nome: "Produto 1",
      valor: 10.0,
      codigoBarras: "123456789",
    },
    {
      id: 2,
      nome: "Produto 2",
      valor: 20.0,
      codigoBarras: "987654321",
    },
  ];
};

export const getProdutoById = async (id: number): Promise<Produto> => {
  try {
    return await produtoAPI.getById(id);
  } catch (err) {
    throw new Error("Failed to load product");
  }
};

export const getProdutoByCodigoBarras = async (
  codigoBarras: string
): Promise<Produto> => {
  try {
    return await produtoAPI.getBySpecificField(codigoBarras);
  } catch (err) {
    throw new Error("Failed to load product" + err);
  }
};

export const createProduto = async (produto: Produto): Promise<Produto> => {
  try {
    return await produtoAPI.post(produto);
  } catch (err) {
    throw new Error("Failed to create product");
  }
};
