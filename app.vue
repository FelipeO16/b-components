<template>
  <div :class="{ dark: dark }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
let dark = useLocalStorage("dark", true);
</script>
