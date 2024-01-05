<template>
  <div class="a flex justify-center p-4">
    <div class="flex gap-2">
      <BaseIconButton class="h-fit">
        <Icon
          name="icon-park-outline:facebook"
          color="#3b5998"
          class="text-3xl"
        />
      </BaseIconButton>
      <BaseIconButton class="h-fit">
        <Icon
          name="icon-park-outline:instagram"
          color="#e1306c"
          class="text-3xl"
        />
      </BaseIconButton>
      <BaseIconButton class="h-fit">
        <Icon
          name="icon-park-outline:youtube"
          color="#ff0000"
          class="text-3xl"
        />
      </BaseIconButton>
      <BaseIconButton class="h-fit">
        <Icon
          name="icon-park-outline:twitter"
          color="#00acee"
          class="text-3xl"
        />
      </BaseIconButton>
    </div>
  </div>
</template>

<style scoped>
.a {
  @apply h-screen w-screen   bg-gradient-to-br from-[#ffea299c] dark:from-[#171852] to-[#ff00005d] dark:to-[#ea00ff4d] dark:bg-background-800 bg-[#e1e0e400];
}
</style>
