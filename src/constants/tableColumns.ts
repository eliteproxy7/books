import { TableColumn } from '@/types';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', slotName: 'name' }, // slotName is optional
  { key: 'email', label: 'Email', slotName: 'email' },
  { key: 'website', label: 'Website', slotName: 'website' },
];