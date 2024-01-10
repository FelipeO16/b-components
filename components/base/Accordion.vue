<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items: {
      title: string;

      content: string;
    }[];

    openItems?: number[];

    exclusive?: boolean;

    shape?: "straight" | "rounded" | "smooth" | "curved";

    action?: "dot" | "chevron" | "plus";
  }>(),
  {
    openItems: () => [],
    shape: undefined,
    action: "dot",
    exclusive: false,
  }
);
const emits = defineEmits<{
  (
    event: "open",
    item: {
      /**
       * The title of the accordion item.
       */
      title: string;
      /**
       * The content of the accordion item.
       */
      content: string;
    }
  ): void;
}>();
const appConfig = useAppConfig();
const shape = computed(() => props.shape ?? "smooth");

const shapeStyle = {
  straight: "",
  rounded: "nui-accordion-rounded",
  smooth: "nui-accordion-smooth",
  curved: "nui-accordion-curved",
};
const actionStyle = {
  dot: "nui-accordion-dot",
  chevron: "nui-accordion-chevron",
  plus: "nui-accordion-plus",
};

const internalOpenItems = ref(props.openItems);
const toggle = (key: number) => {
  const wasOpen = internalOpenItems.value.includes(key);

  if (props.exclusive) {
    internalOpenItems.value.splice(0, internalOpenItems.value.length);

    if (!wasOpen) {
      emits("open", props.items[key]);
      internalOpenItems.value.push(key);
    }

    return;
  }

  if (wasOpen) {
    internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1);
  } else {
    emits("open", props.items[key]);
    internalOpenItems.value.push(key);
  }
};
</script>

<template>
  <div
    v-for="(item, key) in items"
    :key="key"
    class="nui-accordion"
    :class="[actionStyle[props.action], shape && shapeStyle[shape]]"
  >
    <details
      :open="internalOpenItems?.includes(key) ?? undefined"
      class="nui-accordion-detail"
    >
      <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
        <summary
          class="nui-accordion-summary"
          tabindex="0"
          @click.prevent="() => toggle(key)"
        >
          <slot
            name="accordion-item-summary"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            <div class="nui-accordion-header">
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="none"
                class="nui-accordion-header-inner"
              >
                {{ item.title }}
              </BaseHeading>

              <div
                v-if="props.action === 'dot'"
                class="nui-accordion-dot"
              ></div>
              <div
                v-else-if="props.action === 'chevron'"
                class="nui-icon-outer"
              >
                <Icon name="ion:chevron-down" />
              </div>
              <div v-else-if="props.action === 'plus'" class="nui-icon-outer">
                <Icon
                  name="material-symbols:add-circle-outline"
                  color="white"
                />
              </div>
            </div>
          </slot>
        </summary>
        <div class="nui-accordion-content">
          <slot
            name="accordion-item-content"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            <BaseParagraph size="md" lead="tight">
              {{ item.content }}
            </BaseParagraph>
          </slot>
        </div>
      </slot>
    </details>
  </div>
</template>

<style scoped>
.nui-accordion {
  display: block;
}
.nui-accordion {
  width: 100%;
}
.nui-accordion {
  overflow: hidden;
}
.nui-accordion {
  border-width: 1px;
}
.nui-accordion {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.nui-accordion {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
:is(.dark .nui-accordion) {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}
:is(.dark .nui-accordion) {
  --tw-bg-opacity: 1;
  background-color: #0a0f14;
}
.nui-accordion .nui-accordion-detail[open]:not(:first-child) {
  border-top-width: 1px;
}
.nui-accordion .nui-accordion-detail[open]:not(:first-child) {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
:is(.dark .nui-accordion .nui-accordion-detail[open]:not(:first-child)) {
  --tw-border-opacity: 1;
  border-color: #0a0f14;
}
.nui-accordion .nui-accordion-detail .nui-accordion-dot {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}
:is(.dark .nui-accordion .nui-accordion-detail .nui-accordion-dot) {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}
.nui-accordion .nui-accordion-detail[open] .nui-accordion-dot {
  --tw-bg-opacity: 1;
  background-color: #fee715;
}
.nui-accordion .nui-accordion-summary {
  cursor: pointer;
}
.nui-accordion .nui-accordion-summary {
  list-style-type: none;
}
.nui-accordion .nui-accordion-summary {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.nui-accordion .nui-accordion-header {
  display: flex;
}
.nui-accordion .nui-accordion-header {
  align-items: center;
}
.nui-accordion .nui-accordion-header {
  justify-content: space-between;
}
.nui-accordion .nui-accordion-header .nui-accordion-header-inner {
  --tw-text-opacity: 1;
  color: #0a0f14;
}
:is(.dark .nui-accordion .nui-accordion-header .nui-accordion-header-inner) {
  --tw-text-opacity: 1;
  color: #fff;
}
.nui-accordion .nui-accordion-dot {
  margin-inline-start: 0.5rem /* 8px */;
}
.nui-accordion .nui-accordion-dot {
  height: 0.75rem /* 12px */;
}
.nui-accordion .nui-accordion-dot {
  width: 0.75rem /* 12px */;
}
.nui-accordion .nui-accordion-dot {
  border-radius: 9999px;
}
.nui-accordion .nui-accordion-dot {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.nui-accordion .nui-accordion-dot {
  transition-duration: 300ms;
}
.nui-accordion .nui-icon-outer {
  margin-inline-start: 0.5rem /* 8px */;
}
.nui-accordion .nui-icon-outer {
  display: flex;
}
.nui-accordion .nui-icon-outer {
  height: 2rem /* 32px */;
}
.nui-accordion .nui-icon-outer {
  width: 2rem /* 32px */;
}
.nui-accordion .nui-icon-outer {
  align-items: center;
}
.nui-accordion .nui-icon-outer {
  justify-content: center;
}
.nui-accordion .nui-icon-outer {
  border-radius: 9999px;
}
.nui-accordion .nui-icon-outer {
  border-width: 1px;
}
.nui-accordion .nui-icon-outer {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.nui-accordion .nui-icon-outer {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.nui-accordion .nui-icon-outer {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.nui-accordion .nui-icon-outer {
  transition-duration: 300ms;
}
:is(.dark .nui-accordion .nui-icon-outer) {
  --tw-border-opacity: 1;
  border-color: #0a0f14;
}
:is(.dark .nui-accordion .nui-icon-outer) {
  background-color: rgb(51 65 85 / 0.6);
}
.nui-accordion .nui-chevron-icon {
  height: 1rem /* 16px */;
}
.nui-accordion .nui-chevron-icon {
  width: 1rem /* 16px */;
}
.nui-accordion .nui-chevron-icon {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}
.nui-accordion .nui-chevron-icon {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.nui-accordion .nui-chevron-icon {
  transition-duration: 300ms;
}
.nui-accordion .nui-plus-icon {
  height: 1rem /* 16px */;
}
.nui-accordion .nui-plus-icon {
  width: 1rem /* 16px */;
}
.nui-accordion .nui-plus-icon {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}
.nui-accordion .nui-plus-icon {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.nui-accordion .nui-plus-icon {
  transition-duration: 300ms;
}
.nui-accordion .nui-accordion-content {
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
}
.nui-accordion .nui-accordion-content {
  padding-bottom: 1.25rem /* 20px */;
}
.nui-accordion .nui-accordion-content {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.nui-accordion .nui-accordion-content {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}
:is(.dark .nui-accordion .nui-accordion-content) {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}
.nui-accordion.nui-accordion-dot .nui-accordion-header {
  padding: 1.25rem /* 20px */;
}
.nui-accordion.nui-accordion-chevron .nui-accordion-header,
.nui-accordion.nui-accordion-plus .nui-accordion-header {
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
}
.nui-accordion.nui-accordion-chevron .nui-accordion-header,
.nui-accordion.nui-accordion-plus .nui-accordion-header {
  padding-top: 0.75rem /* 12px */;
  padding-bottom: 0.75rem /* 12px */;
}
.nui-accordion.nui-accordion-chevron .nui-accordion-header,
.nui-accordion.nui-accordion-plus .nui-accordion-header {
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
}
.nui-accordion.nui-accordion-chevron .nui-accordion-header,
.nui-accordion.nui-accordion-plus .nui-accordion-header {
  padding-top: 0.75rem /* 12px */;
  padding-bottom: 0.75rem /* 12px */;
}
.nui-accordion.nui-accordion-chevron
  .nui-accordion-detail[open]
  .nui-icon-outer {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.nui-accordion.nui-accordion-plus .nui-accordion-detail[open] .nui-icon-outer {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.nui-accordion.nui-accordion-rounded.nui-accordion:first-child {
  border-top-left-radius: 0.375rem /* 6px */;
  border-top-right-radius: 0.375rem /* 6px */;
}
.nui-accordion.nui-accordion-rounded.nui-accordion:first-child {
  border-top-left-radius: 0.375rem /* 6px */;
  border-top-right-radius: 0.375rem /* 6px */;
}
.nui-accordion.nui-accordion-rounded.nui-accordion:last-child {
  border-bottom-right-radius: 0.375rem /* 6px */;
  border-bottom-left-radius: 0.375rem /* 6px */;
}
.nui-accordion.nui-accordion-rounded.nui-accordion:last-child {
  border-bottom-right-radius: 0.375rem /* 6px */;
  border-bottom-left-radius: 0.375rem /* 6px */;
}
.nui-accordion.nui-accordion-smooth.nui-accordion:first-child {
  border-top-left-radius: 0.5rem /* 8px */;
  border-top-right-radius: 0.5rem /* 8px */;
}
.nui-accordion.nui-accordion-smooth.nui-accordion:first-child {
  border-top-left-radius: 0.5rem /* 8px */;
  border-top-right-radius: 0.5rem /* 8px */;
}
.nui-accordion.nui-accordion-smooth.nui-accordion:last-child {
  border-bottom-right-radius: 0.5rem /* 8px */;
  border-bottom-left-radius: 0.5rem /* 8px */;
}
.nui-accordion.nui-accordion-smooth.nui-accordion:last-child {
  border-bottom-right-radius: 0.5rem /* 8px */;
  border-bottom-left-radius: 0.5rem /* 8px */;
}
.nui-accordion.nui-accordion-curved.nui-accordion:first-child {
  border-top-left-radius: 0.75rem /* 12px */;
  border-top-right-radius: 0.75rem /* 12px */;
}
.nui-accordion.nui-accordion-curved.nui-accordion:first-child {
  border-top-left-radius: 0.75rem /* 12px */;
  border-top-right-radius: 0.75rem /* 12px */;
}
.nui-accordion.nui-accordion-curved.nui-accordion:last-child {
  border-bottom-right-radius: 0.75rem /* 12px */;
  border-bottom-left-radius: 0.75rem /* 12px */;
}
.nui-accordion.nui-accordion-curved.nui-accordion:last-child {
  border-bottom-right-radius: 0.75rem /* 12px */;
  border-bottom-left-radius: 0.75rem /* 12px */;
}
</style>
