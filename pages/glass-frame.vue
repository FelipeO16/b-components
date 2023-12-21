<template>
  <div class="glassmorphism">
    <div class="grid grid-cols-12">
      <div class="col-span-12 flex justify-center p-4 h-24">
        <UtilsToggleDark />
      </div>
    </div>

    <!-- <div class="content col-span-8">
      <div class="absolute top-4"></div>
      <BaseGlassCard class="h-2/6 w-1/6">
        <div class="text-xl text-white"></div>
        <div class="flex items-center justify-end w-full gap-4">
          <BaseButton type="primary" outlined> Cancel </BaseButton>
          <BaseButton type="primary"> Confirm </BaseButton>
        </div>
      </BaseGlassCard>
    </div> -->
    <div class="grid grid-cols-12 p-4 gap-4 h-[calc(100%-6rem)]">
      <div class="col-span-9 h-full">
        <BaseGlassCard class="grid grid-cols-9 p-8 gap-4 h-full">
          <BaseGlassCard class="col-span-6"></BaseGlassCard>
          <div class="col-span-3 flex flex-col gap-4">
            <BaseGlassCard class="h-full"></BaseGlassCard>
            <BaseGlassCard class="h-full"></BaseGlassCard>
          </div>
        </BaseGlassCard>
      </div>
      <BaseGlassCard
        class="col-span-3 flex flex-col p-4 gap-2 md:gap-3 lg:gap-4 xl:gap-4 2xl:gap-7"
      >
        <BaseGlassCard class="h-32"> </BaseGlassCard>
        <div class="flex justify-between">
          <BaseGlassCard class="h-8 w-1/3"> </BaseGlassCard>
          <BaseGlassCard class="h-8 w-1/3"> </BaseGlassCard>
        </div>
        <BaseGlassCard class="h-24 w-2/3"> </BaseGlassCard>
        <div class="flex justify-end">
          <BaseGlassCard class="h-8 w-2/3"> </BaseGlassCard>
        </div>
        <div class="flex justify-center">
          <BaseGlassCard class="h-16 w-2/3"> </BaseGlassCard>
        </div>
        <BaseGlassCard class="h-8 w-1/5"> </BaseGlassCard>
        <BaseGlassCard class="h-8 w-2/5"> </BaseGlassCard>
        <BaseGlassCard class="h-8 w-3/5"> </BaseGlassCard>
        <BaseGlassCard class="h-8 w-4/5"> </BaseGlassCard>
        <BaseGlassCard class="h-8"> </BaseGlassCard>
      </BaseGlassCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { testeStore } from "@/stores/teste";

let teste = testeStore();
let dado = ref(null);
let numberUser = ref(0);
</script>

<style scoped>
.glassmorphism {
  height: 100vh;
  width: 100vw;
  background-image: radial-gradient(circle, orange, transparent 20%, orangered);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: orange;
  @apply h-screen w-screen   bg-gradient-to-br from-[#ffea299c] dark:from-[#171852] to-[#ff00005d] dark:to-[#ea00ff4d] dark:bg-background-800 bg-[#e1e0e400];
}

.content {
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.007) 5px,
    transparent 0
  );
  background-size: 30px 30px;
  @apply w-full h-full flex  justify-center items-center;
}
</style>
