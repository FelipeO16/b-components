<script setup lang="ts">
let btns = [
  "primary",
  "muted",
  "neutral",
  "background",
  "success",
  "error",
  "warning",
  "info",
];
let dark = useDarkMode();
</script>
<template>
  <div class="app">
    {{ dark }}
    <div>
      <BaseButton
        v-for="(btn, index) in btns"
        :type="btn"
        :key="index"
        outlined
        shape="none"
        >{{ btn.toUpperCase() }}</BaseButton
      >
    </div>
    <div>
      <BaseButton
        v-for="(btn, index) in btns"
        :type="btn"
        :key="index"
        shape="md"
        >{{ btn.toUpperCase() }}</BaseButton
      >
    </div>
    <div>
      <BaseButton
        v-for="(btn, index) in btns"
        :type="btn"
        :key="index"
        size="sm"
        shape="full"
        >{{ btn.toUpperCase() }}</BaseButton
      >
    </div>
    <div class="toggle-dark/light">
      <label class="switch">
        <input type="checkbox" v-model="dark" />
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.app {
  @apply h-screen w-screen flex flex-col justify-center items-center gap-4;
}

.app div {
  @apply flex gap-8 w-[40%] justify-evenly;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
