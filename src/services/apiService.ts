// src/services/apiService.ts
export const apiService = {
    async get<T>(url: string): Promise<T> {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json() as T;
    },
  };
  