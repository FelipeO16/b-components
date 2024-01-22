<template>
  <div
    class="app w-full h-screen flex flex-col gap-2 items-center justify-center"
  >
    <div
      class="w-4/5 border border-success-500 rounded-lg bg-muted-500 h-5/6 p-20"
    >
      <h1 class="text-white">Página: {{ pagination.current_page }}</h1>
    </div>
    <div class="w-4/5 flex justify-end">
      <div class="self-end">
        <BasePagination
          :pagination="pagination"
          :offset="offset"
          color="success"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BasePagination from "@/components/base/Pagination.vue";
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      pagination: {
        current_page: 1,
        last_page: 99,
        to: 4,
        from: 1,
      },
    };
  },
  methods: {
    changePage(page) {
      this.pagination.current_page = page;
      this.getResults(page);
    },
  },
};
</script>

<style scoped>
.app {
  @apply w-screen h-screen bg-[#1c1c1c];
}
</style>
