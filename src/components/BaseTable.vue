<template>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="column in columns" :key="`cell-${item.id}-${column.key}`">{{ item[column.key] }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { TableColumn, User } from '@/types';
  
  export default defineComponent({
    name: 'BaseTable',
    props: {
      items: {
        type: Array as PropType<User[]>,
        required: true,
      },
      columns: {
        type: Array as PropType<TableColumn[]>,
        required: true,
      },
    },
  });
  </script>
  