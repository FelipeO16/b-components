import type { colorType } from "@/interfaces/colors";

export default function () {
  const colors = {
    light: {
      primary: "fill-primary-500 ",
      muted: "fill-muted-500 ",
      neutral: "fill-neutral-500 ",
      background: "fill-background-500 ",
      success: "fill-success-500 ",
      error: "fill-error-500 ",
      warning: "fill-warning-500 ",
      info: "fill-info-500 ",
    },
    dark: {
      primary: "dark:fill-primary-500 ",
      muted: "dark:fill-muted-500 ",
      neutral: "dark:fill-neutral-500 ",
      background: "dark:fill-background-500 ",
      success: "dark:fill-success-500 ",
      error: "dark:fill-error-500 ",
      warning: "dark:fill-warning-500 ",
      info: "dark:fill-info-500 ",
    },
  };
  return colors;
}
