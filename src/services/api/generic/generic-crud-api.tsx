export type CrudAPI<T> = {
  getAll: () => Promise<T[]>;
  getById: (id: number) => Promise<T>;
  post: (data: T) => Promise<T>;
  put: (id: number, data: T) => Promise<T>;
  delete: (id: number) => Promise<void>;
  getBySpecificField: (value: any) => Promise<T>;
};

export const createGenericCrudAPI = <T,>(url: string): CrudAPI<T> => {
  const baseUrl = "http://localhost:3000/api/";

  const getAll = async (): Promise<T[]> => {
    const response = await fetch(`${baseUrl + url}`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  };

  const getById = async (id: number): Promise<T> => {
    const response = await fetch(`${baseUrl + url}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  };

  const post = async (data: T): Promise<T> => {
    const response = await fetch(`${baseUrl + url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to post data");
    return await response.json();
  };

  const put = async (id: number, data: T): Promise<T> => {
    const response = await fetch(`${baseUrl + url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  };

  const deleteItem = async (id: number): Promise<void> => {
    const response = await fetch(`${baseUrl + url}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
  };

  const getBySpecificField = async (value: any): Promise<T> => {
    const response = await fetch(`${baseUrl + url}/?${value}`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  };

  return { getAll, getById, post, put, delete: deleteItem, getBySpecificField };
};
