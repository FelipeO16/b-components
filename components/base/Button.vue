<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: keyof typeof types;
    size?: keyof typeof sizes;
    shape?: keyof typeof shapes;
    fullWidth?: boolean;
    outlined?: boolean;
    icon?: "string";
    iconColor?: "string";
  }>(),
  {
    type: "primary",
    size: "md",
    shape: "xs",
    fullWidth: false,
  }
);

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
};

const types = {
  primary: ["bg-primary-500", "text-muted-500"],
  muted: ["bg-muted-500", "text-white"],
  neutral: ["bg-neutral-500", "text-black"],
  background: ["bg-background-500", "text-white"],
  success: ["bg-success-500", "text-white"],
  error: ["bg-error-500", "text-white"],
  warning: ["bg-warning-500", "text-muted-500"],
  info: ["bg-info-500", "text-white"],
};

const outlines = {
  primary: [
    " border border-primary-500",
    "text-primary-500",
    "hover:bg-primary-500",
    "hover:text-white",
  ],
  muted: [
    " border border-muted-500",
    "text-muted-500",
    " hover:bg-muted-500",
    "hover:text-white",
  ],
  neutral: [
    " border border-neutral-500 ",
    "text-neutral-500",
    " hover:bg-neutral-500",
    "hover:text-white",
  ],
  background: [
    " border border-background-500 dark:border border-background-500",
    "text-background-500 dark:text-background-300",
    " hover:bg-background-500 dark:hover:bg-background-300",
    "hover:text-white dark:hover:text-white",
  ],
  success: [
    " border border-success-500",
    "text-success-500",
    " hover:bg-success-500",
    "hover:text-white",
  ],
  error: [
    " border border-error-500",
    "text-error-500",
    " hover:bg-error-500",
    "hover:text-white",
  ],
  warning: [
    " border border-warning-500",
    "text-warning-500",
    "hover:bg-warning-500",
    "hover:text-white",
  ],
  info: [
    " border border-info-500",
    "text-info-500",
    "hover:text-white",
    " hover:bg-info-500",
  ],
};

const shapes = {
  full: "rounded-full after:rounded-full before:rounded-full",
  xl: "rounded-xl after:rounded-xl before:rounded-xl",
  lg: "rounded-lg after:rounded-lg before:rounded-lg",
  md: "rounded-md after:rounded-md before:rounded-md",
  sm: "rounded-sm after:rounded-sm before:rounded-sm",
  xs: "rounded after:rounded before:rounded",
  none: "rounded-none after:rounded-none before:rounded-none",
};

const classes = computed(() => {
  const type = props.outlined ? outlines[props.type] : types[props.type];
  return [
    ...type,
    props.size && sizes[props.size],
    props.fullWidth && "w-full",
    shapes[props.shape] || shapes.md,
  ];
});
</script>

<template>
  <button :class="classes" class="button">
    <Icon
      :name="props.icon"
      :color="props.iconColor ?? 'black'"
      class="mr-2"
      v-if="props.icon"
    />
    <slot />
  </button>
</template>

<style scoped>
.button {
  font-family: "Inter";
  @apply px-4 py-2 transition-all duration-200 ease-in-out relative z-20 shadow-md;
}
.button:hover {
  @apply bg-opacity-80 shadow-lg;
}
</style>
