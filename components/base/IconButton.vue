<template>
  <button class="btn" :class="shape">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  shape?: "rounded" | "full" | "none";
}>();

const shapes = {
  rounded: "rounded-md",
  full: "rounded-full",
  none: "rounded-none",
};

const shape = computed(() => shapes[props.shape ?? "rounded"]);
</script>

<style scoped>
.btn {
  @apply p-2 bg-slate-300 dark:bg-gray-500 bg-opacity-5 dark:bg-opacity-20 text-white w-full h-full shadow-md shadow-background-200 dark:shadow-black max-w-[3.5rem];
}
</style>
