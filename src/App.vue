<template>
  <div id="app">
    <UsersTableView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersTableView from "./views/UsersTableView.vue";

export default defineComponent({
  name: "App",
  components: {
    UsersTableView,
  },
});
</script>

<style>
/* Global styles */
</style>
