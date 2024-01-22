<template>
  <div class="a flex justify-center p-4 flex-col gap-16 flex-wrap">
    <UtilsToggleDark />
    <div class="flex gap-2">
      <BaseButtonGroup>
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
      </BaseButtonGroup>
    </div>

    <div class="md:max-w-lg">
      <BaseAccordion :items="accordion" shape="rounded" />
    </div>

    <BaseAlert
      :show="true"
      title="Aviso Importante"
      message="Este é um exemplo de Alerta!"
      type="warning"
      shape="rounded"
    />
    <div class="flex gap-8">
      <BaseButtonGroup>
        <BaseButton
          v-for="(btn, index) in btns"
          :type="btn"
          :key="index"
          shape="rounded"
          >{{ btn.toUpperCase() }}</BaseButton
        ></BaseButtonGroup
      >
    </div>
    <div class="w-1/6">
      <BaseCard shape="straight" color="primary" class="p-6">
        <BaseHeading
          as="h4"
          size="sm"
          weight="semibold"
          lead="tight"
          class="text-muted-800 mb-2 dark:text-white"
        >
          Iam a card
        </BaseHeading>

        <BaseParagraph
          size="sm"
          lead="tight"
          class="text-[#000000a6] dark:text-[#ffffffa4]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </BaseParagraph>
      </BaseCard>
    </div>
    <BaseGlassCard
      class="h-24 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
    </BaseGlassCard>

    <BasePagination
      color="success"
      :pagination="{
        current_page: 1,
        last_page: 20,
        to: 4,
        from: 1,
      }"
    />
  </div>
</template>

<style scoped>
.a {
  @apply h-screen w-screen dark:bg-[#1c1c1c]   bg-[#F5f5f5];
}
</style>

<script lang="ts" setup>
const show = ref(true);

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

const accordion = ref([
  {
    title: "Accordion Item 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.",
  },
  {
    title: "Accordion Item 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.",
  },
  {
    title: "Accordion Item 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.",
  },
]);
</script>
