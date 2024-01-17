<template>
  <div class="w-screen h-screen">
    <div class="grid gap-4 md:grid-cols-3">
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

      <BaseCard shape="rounded" color="info" class="p-6">
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

      <BaseCard shape="smooth" color="success" class="p-6">
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

      <BaseCard shape="smooth" color="warning" class="p-6">
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

      <BaseCard shape="curved" color="danger" class="p-6">
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
      <UtilsToggleDark />
    </div>
  </div>
</template>
