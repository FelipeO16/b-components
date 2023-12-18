<template>
  <div class="teste">
    <div class="w-12">
      <UtilsToggleDark />
    </div>
    <div class="h-24 flex flex-col"></div>
  </div>
</template>

<script setup lang="ts">
import { testeStore } from "@/stores/teste";

let teste = testeStore();
let dado = ref(null);
let numberUser = ref(0);
</script>

<style scoped>
.teste {
  @apply h-screen w-screen flex  justify-center bg-white dark:bg-background-800;
}
</style>
