<template>
  <div class="data-table">
    <table-header />
    <table-row v-for="row in rows" :key="row.id" :row="row" />
    <table-pagination />
  </div>
</template>

<script>
// Import Vue Component since we're defining local components
import Vue from 'vue'

// Define the child components
const TableHeader = Vue.component('table-header', {
  template: '<thead><tr><th>Header 1</th><th>Header 2</th></tr></thead>',
})

const TableRow = Vue.component('table-row', {
  props: ['row'],
  template: '<tr><td>{{ row.col1 }}</td><td>{{ row.col2 }}</td></tr>',
})

const TablePagination = Vue.component('table-pagination', {
  template: '<div>Pagination Placeholder</div>',
})

export default {
  components: {
    TableHeader,
    TableRow,
    TablePagination,
  },
  data() {
    return {
      // Example rows (you might fetch this data from an API)
      rows: [
        { id: 1, col1: 'Row 1 Col 1', col2: 'Row 1 Col 2' },
        { id: 2, col1: 'Row 2 Col 1', col2: 'Row 2 Col 2' },
        // Add more rows as needed
      ],
    }
  },
}
</script>

<style scoped>
/* Add your CSS styling here */
.data-table {
  /* Example styling */
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>
