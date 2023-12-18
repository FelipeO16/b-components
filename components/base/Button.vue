<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: keyof typeof types;
    size?: keyof typeof sizes;
    shape?: keyof typeof shapes;
    fullWidth?: boolean;
    outlined?: boolean;
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
  primary: ["bg-primary-500", "text-white"],
  muted: ["bg-muted-500", "text-white"],
  neutral: ["bg-neutral-500", "text-black"],
  background: ["bg-background-500", "text-white"],
  success: ["bg-success-500", "text-white"],
  error: ["bg-error-500", "text-white"],
  warning: ["bg-warning-500", "text-white"],
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
    " border border-neutral-500",
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
  mid: "rounded-md after:rounded-md before:rounded-md",
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
    shapes[props.shape] || shapes.mid,
  ];
});
</script>

<template>
  <button :class="classes" class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  font-family: "Inter";
  @apply px-4 py-2 transition-all duration-200 ease-in-out relative z-20;
}
.button:hover {
  @apply bg-opacity-80 shadow-lg;
}

/* .button::before,
.button::after {
  content: "";
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  opacity: 0;
  border-radius: 3px;
  transition: opacity 0.3s ease-in-out;
  @apply border-r-2 border-b-white/25;
}

.button:hover::before {
  content: "";
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid white;
  border-color: transparent white white transparent;
  z-index: -1;
  opacity: 1;
  border-radius: 3px;
  transition: opacity 0.3s ease-in-out;
  @apply border-r-2 border-b-white/25;
}

.button:hover::after {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid;
  border-radius: 3px;
  border-color: white transparent transparent white;

  z-index: -1;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  @apply border-l-white/25 border-t-white/25;
} */
</style>
