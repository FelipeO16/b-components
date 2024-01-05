<template>
  <div class="toggle-dark/light max-w-[3.5rem] cursor-pointer">
    <IconDark class="h-14" dark="neutral" @click="dark = !dark" v-if="dark" />
    <IconLight
      class="h-14"
      light="primary"
      @click="dark = !dark"
      v-if="!dark"
    />
  </div>
</template>

<script setup lang="ts">
let dark = useLocalStorage("dark", true);
</script>

<style scoped>
.v-enter-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
