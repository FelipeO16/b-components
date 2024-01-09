<template>
  <div class="alert">
    <div class="alert__overlay" v-if="show" />
    <div
      class="alert__container gap-4 flex flex-col w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12 border rounded min-h-[12rem] relative"
      :class="
        classes['type']['alert'] +
        ' ' +
        classes['shape'] +
        ' ' +
        classes['size']
      "
      v-if="show"
    >
      <div class="alert__header">
        <h3
          class="alert__title text-xl font-bold"
          :class="classes['type']['header']"
        >
          {{ title }}
        </h3>
      </div>
      <div class="alert__body" :class="classes['type']['body']">
        <p class="alert__message">{{ message }}</p>
      </div>
      <div class="alert__footer self-end flex gap-4 absolute bottom-4 right-4">
        <BaseButton
          :type="type"
          :shape="shape"
          @click="confirm"
          outlined
          class="font-medium text-muted-500"
          >OK</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: "success" | "error" | "warning" | "info" | "primary";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    shape?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";
    icon?: string;
    title: string;
    message: string;
    show: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
  }>(),
  {
    type: "primary",
    size: "md",
    shape: "md",
    icon: "",
    title: "",
    message: "",
    show: false,
    onConfirm: () => {},
    onCancel: () => {},
  }
);

const show = ref(props.show);

watch(
  () => props.show,
  (value) => {
    show.value = value;
  }
);

const confirm = () => {
  props.onConfirm?.();
  show.value = false;
};

const cancel = () => {
  props.onCancel?.();
  show.value = false;
};

let types = {
  primary: {
    alert: "bg-muted-500 text-primary-500 border-primary-500",
    header: "text-primary-500",
    body: "text-primary-400",
  },
  success: {
    alert: "bg-muted-500 border-success-500",
    header: "text-success-500",
    body: "text-success-400",
  },
  error: {
    alert: "bg-muted-500 border-error-500",
    header: "text-error-500",
    body: "text-error-400",
  },
  warning: {
    alert: "bg-muted-500 border-warning-500",
    header: "text-warning-500",
    body: "text-warning-400",
  },
  info: {
    alert: "bg-muted-500 border-info-500",
    header: "text-info-500",
    body: "text-info-400",
  },
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

const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
  xl: "px-6 py-5 text-xl",
};

const classes = computed(() => {
  return {
    type: types[props.type],
    shape: shapes[props.shape],
    size: sizes[props.size],
  };
});
</script>

<style scoped>
.alert__overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
}
.alert__container {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
}
</style>
