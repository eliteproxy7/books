import { ref } from 'vue';
import { apiService } from '@/services/apiService';

// Simplifies the generic handling by not enforcing a strict array type
function useFetchData(url: string) {
  const isLoading = ref(true);
  const error = ref<any>(null); // Assume error will hold a string message, but start as null
  const data = ref<any>(null); // Explicitly type data as any

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const responseData = await apiService.get(url); // Let the response be dynamically typed
      data.value = responseData;
    } catch (e) {
      // Handle any caught error as a generic error object
      error.value = e instanceof Error ? e.message : 'An error occurred';
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, error, fetchData };
}

export default useFetchData;