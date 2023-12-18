<template>
  <div class="toggle-dark/light max-w-[3.5rem]">
    <Transition>
      <BaseIconButton @click="dark = !dark" shape="rounded">
        <IconDark light="primary" v-if="!dark" />
        <IconLight dark="warning" v-if="dark" />
      </BaseIconButton>
    </Transition>
  </div>
</template>

<script setup lang="ts">
let dark = useLocalStorage("dark", false);
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
