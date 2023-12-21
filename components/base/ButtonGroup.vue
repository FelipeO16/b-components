<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<style>
.button-group {
  @apply flex flex-row;
}

.button-group > button:first-child {
  @apply rounded-l-lg rounded-r-none;
}

.button-group > button:last-child {
  @apply rounded-r-lg rounded-l-none;
}

.button-group > button:not(:first-child):not(:last-child) {
  @apply -ml-px rounded-none;
}
</style>
