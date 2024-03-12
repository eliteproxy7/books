// src/types/index.ts
export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
  }
  
// src/types/index.ts
export interface TableColumn {
  key: string;
  label: string;
  slotName?: string; // Optional property for scoped slot customization
}

  