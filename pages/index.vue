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

    <BaseAlert
      :show="true"
      title="Aviso Importante"
      message="Este é um exemplo de Alerta!"
      type="success"
      shape="rounded"
    />
  </div>
</template>

<style scoped>
.a {
  @apply h-screen w-screen   bg-[#1c1c1c];
}
</style>

<script lang="ts">
const show = ref(true);
</script>
