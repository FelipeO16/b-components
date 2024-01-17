<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The shape of the card.
     */
    shape?: "straight" | "rounded" | "smooth" | "curved";

    /**
     * Whether the card is elevated.
     */
    elevated?: boolean;

    /**
     * Whether the card is elevated on hover.
     */
    elevatedHover?: boolean;

    /**
     * The color of the card.
     */
    color?:
      | "white"
      | "white-contrast"
      | "muted"
      | "muted-contrast"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "none";
  }>(),
  {
    shape: undefined,
    elevated: false,
    elevatedHover: false,
    color: "white",
  }
);
const appConfig = useAppConfig();
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.card);

const shapeStyle = {
  straight: "",
  rounded: "nui-card-rounded",
  smooth: "nui-card-smooth",
  curved: "nui-card-curved",
};
const colorStyle = {
  white: "nui-card-white",
  "white-contrast": "nui-card-white-contrast",
  muted: "nui-card-muted",
  "muted-contrast": "nui-card-muted-contrast",
  primary: "nui-card-primary",
  info: "nui-card-info",
  success: "nui-card-success",
  warning: "nui-card-warning",
  danger: "nui-card-danger",
  none: "",
};

const classes = computed(() => [
  "nui-card",
  shape.value && shapeStyle[shape.value],
  colorStyle[props.color],
  props.elevated && "nui-card-shadow",
  props.elevatedHover && "nui-card-shadow-hover",
]);
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<style scoped>
.nui-card {
  position: relative;
}
.nui-card {
  width: 100%;
}
.nui-card {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.nui-card {
  transition-duration: 300ms;
}
.nui-card.nui-card-white {
  border-width: 1px;
}
.nui-card.nui-card-white {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.nui-card.nui-card-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
:is(.dark .nui-card.nui-card-white) {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}
:is(.dark .nui-card.nui-card-white) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}
.nui-card.nui-card-white-contrast {
  border-width: 1px;
}
.nui-card.nui-card-white-contrast {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.nui-card.nui-card-white-contrast {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
:is(.dark .nui-card.nui-card-white-contrast) {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
}
:is(.dark .nui-card.nui-card-white-contrast) {
  --tw-bg-opacity: 1;
  background-color: rgb(2 6 23 / var(--tw-bg-opacity));
}
.nui-card.nui-card-muted {
  border-width: 1px;
}
.nui-card.nui-card-muted {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.nui-card.nui-card-muted {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}
:is(.dark .nui-card.nui-card-muted) {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}
:is(.dark .nui-card.nui-card-muted) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}
.nui-card.nui-card-muted-contrast {
  border-width: 1px;
}
.nui-card.nui-card-muted-contrast {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.nui-card.nui-card-muted-contrast {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}
:is(.dark .nui-card.nui-card-muted-contrast) {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
}
:is(.dark .nui-card.nui-card-muted-contrast) {
  --tw-bg-opacity: 1;
  background-color: rgb(2 6 23 / var(--tw-bg-opacity));
}
.nui-card.nui-card-primary {
  border-width: 1px;
}
.nui-card.nui-card-primary {
  --tw-border-opacity: 1;
  border-color: rgb(139 92 246 / var(--tw-border-opacity));
}
.nui-card.nui-card-primary {
  background-color: rgb(139 92 246 / 0.1);
}
.nui-card.nui-card-info {
  border-width: 1px;
}
.nui-card.nui-card-info {
  --tw-border-opacity: 1;
  border-color: rgb(14 165 233 / var(--tw-border-opacity));
}
.nui-card.nui-card-info {
  background-color: rgb(14 165 233 / 0.1);
}
.nui-card.nui-card-success {
  border-width: 1px;
}
.nui-card.nui-card-success {
  --tw-border-opacity: 1;
  border-color: rgb(20 184 166 / var(--tw-border-opacity));
}
.nui-card.nui-card-success {
  background-color: rgb(20 184 166 / 0.1);
}
.nui-card.nui-card-warning {
  border-width: 1px;
}
.nui-card.nui-card-warning {
  --tw-border-opacity: 1;
  border-color: rgb(245 158 11 / var(--tw-border-opacity));
}
.nui-card.nui-card-warning {
  background-color: rgb(245 158 11 / 0.1);
}
.nui-card.nui-card-danger {
  border-width: 1px;
}
.nui-card.nui-card-danger {
  --tw-border-opacity: 1;
  border-color: rgb(244 63 94 / var(--tw-border-opacity));
}
.nui-card.nui-card-danger {
  background-color: rgb(244 63 94 / 0.1);
}
.nui-card.nui-card-rounded {
  border-radius: 0.375rem /* 6px */;
}
.nui-card.nui-card-smooth {
  border-radius: 0.5rem /* 8px */;
}
.nui-card.nui-card-curved {
  border-radius: 0.75rem /* 12px */;
}
.nui-card:not(.nui-card-primary):not(.nui-card-info):not(.nui-card-success):not(
    .nui-card-warning
  ):not(.nui-card-danger).nui-card-shadow {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.nui-card:not(.nui-card-primary):not(.nui-card-info):not(.nui-card-success):not(
    .nui-card-warning
  ):not(.nui-card-danger).nui-card-shadow {
  --tw-shadow-color: rgb(203 213 225 / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}
:is(
    .dark
      .nui-card:not(.nui-card-primary):not(.nui-card-info):not(
        .nui-card-success
      ):not(.nui-card-warning):not(.nui-card-danger).nui-card-shadow
  ) {
  --tw-shadow-color: rgb(30 41 59 / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}
.nui-card:not(.nui-card-primary):not(.nui-card-info):not(.nui-card-success):not(
    .nui-card-warning
  ):not(.nui-card-danger).nui-card-shadow-hover:hover {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.nui-card:not(.nui-card-primary):not(.nui-card-info):not(.nui-card-success):not(
    .nui-card-warning
  ):not(.nui-card-danger).nui-card-shadow-hover:hover {
  --tw-shadow-color: rgb(203 213 225 / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}
:is(
    .dark
      .nui-card:not(.nui-card-primary):not(.nui-card-info):not(
        .nui-card-success
      ):not(.nui-card-warning):not(.nui-card-danger).nui-card-shadow-hover:hover
  ) {
  --tw-shadow-color: rgb(30 41 59 / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}
</style>
