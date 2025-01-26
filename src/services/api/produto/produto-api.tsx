import { createGenericCrudAPI } from "../generic/generic-crud-api";

export interface Produto {
  id?: number;
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

export const updateProduto = async (
  id: number,
  produto: Produto
): Promise<Produto> => {
  try {
    return await produtoAPI.put(id, produto);
  } catch (err) {
    throw new Error("Failed to update product");
  }
};
