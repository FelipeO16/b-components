<template>
  <div class="w-full h-screen">
    <div class="md:max-w-lg">
      lalala
      <BaseAccordion :items="accordion" shape="rounded" />
    </div>
    <UtilsToggleDark />
  </div>
</template>

<script setup lang="ts">
// demo data for the accordion
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

<style scoped></style>
