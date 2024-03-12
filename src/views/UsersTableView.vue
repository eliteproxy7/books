<template>
  <div>
    <SkeletonLoader v-if="isLoading" />
    <div v-else-if="error">{{ error }}</div>
    <BaseTable v-else :items="data" :columns="columns" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import useFetchData from '@/composables/useFetchData';
import BaseTable from '@/components/BaseTable.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import { API_ENDPOINTS } from '@/constants/apiEndpoints';
import { TABLE_COLUMNS } from '@/constants/tableColumns';

export default defineComponent({
  components: {
    BaseTable,
    SkeletonLoader,
  },
  setup() {
    const { data, isLoading, error, fetchData } = useFetchData(API_ENDPOINTS.USERS);
    const columns = TABLE_COLUMNS;

    onMounted(() => {
      fetchData();
    });

    return { data, isLoading, error, columns };
  },
});
</script>
