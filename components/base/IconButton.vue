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
  @apply p-2 bg-background-600 border border-[#ffffff70] dark:border-gray-500 dark:bg-gray-500 bg-opacity-10 dark:bg-opacity-20 text-white shadow-md shadow-[#1c1c1c] dark:shadow-black;
}
</style>
