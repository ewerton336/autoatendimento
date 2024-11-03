import { useState } from "react";

export type CrudAPI<T> = {
  getAll: () => Promise<T[]>;
  getById: (id: number) => Promise<T>;
  post: (data: T) => Promise<T>;
  put: (id: number, data: T) => Promise<T>;
  delete: (id: number) => Promise<void>;
  getBySpecificField: (value: any) => Promise<T>;
};

export const useGenericCrudAPI = <T,>(url: string): CrudAPI<T> => {
  const baseUrl = "http://localhost:3000/api/";
  const [error, setError] = useState<string | null>(null);

  const handleError = (err: unknown): void => {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("An unknown error occurred");
    }
  };

  const getAll = async (): Promise<T[]> => {
    try {
      const response = await fetch(`${baseUrl + url}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.json();
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  const getById = async (id: number): Promise<T> => {
    try {
      const response = await fetch(`${baseUrl + url}/${id}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.json();
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  const post = async (data: T): Promise<T> => {
    try {
      const response = await fetch(`${baseUrl + url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to post data");
      return await response.json();
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  const put = async (id: number, data: T): Promise<T> => {
    try {
      const response = await fetch(`${baseUrl + url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to update data");
      return await response.json();
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  const deleteItem = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${baseUrl + url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete data");
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  const getBySpecificField = async (value: any): Promise<T> => {
    try {
      const response = await fetch(`${baseUrl + url}/?${value}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.json();
    } catch (err) {
      handleError(err);
      throw err;
    }
  };
  return { getAll, getById, post, put, delete: deleteItem, getBySpecificField };
};
