<script setup lang="ts">
import type { colorType } from "~/interfaces/colors";
let btns: Array<colorType["light"]> = [
  "primary",
  "muted",
  "neutral",
  "background",
  "success",
  "error",
  "warning",
  "info",
];
let dark = useLocalStorage("dark", false);
</script>
<template>
  <div class="app">
    {{ dark }}
    <div>
      <BaseButton
        v-for="(btn, index) in btns"
        :type="btn"
        :key="index"
        outlined
        shape="none"
        >{{ btn.toUpperCase() }}</BaseButton
      >
    </div>
    <div>
      <BaseButton
        v-for="(btn, index) in btns"
        :type="btn"
        :key="index"
        shape="mid"
        >{{ btn.toUpperCase() }}</BaseButton
      >
    </div>
    <div>
      <BaseButton
        v-for="(btn, index) in btns"
        :type="btn"
        :key="index"
        size="sm"
        shape="full"
        >{{ btn.toUpperCase() }}</BaseButton
      >
    </div>
    <!-- <div>
      <BaseIconButton v-for="(btn, index) in btns" :key="index" shape="rounded">
        <IconLight :dark="btn" />
      </BaseIconButton>
    </div>

    <div>
      <BaseIconButton v-for="(btn, index) in btns" :key="index" shape="rounded">
        <IconDark :light="btn" />
      </BaseIconButton>
    </div> -->

    <div class="w-4">
      <UtilsToggleDark />
    </div>
  </div>
</template>

<style scoped>
.app {
  @apply h-screen w-screen flex flex-col justify-center items-center gap-4;
}

.app div {
  @apply flex gap-8 w-[40%] justify-evenly;
}
</style>
