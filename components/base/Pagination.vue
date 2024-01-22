<template>
  <div class="pagination">
    <ul :class="classes[2]">
      <li v-if="pagination.current_page > 1">
        <a
          :class="classes[1]"
          href="#"
          @click.prevent="changePage(pagination.current_page - 1)"
        >
          <span>&lt</span>
        </a>
      </li>
      <li
        v-if="
          pagination.current_page < pagination.last_page && pagesNumber[0] > 1
        "
      >
        <a
          :class="classes[1]"
          href="#"
          @click.prevent="changePage(pagination.from)"
        >
          {{ pagination.from }}
        </a>
      </li>
      <li
        v-if="
          pagination.current_page < pagination.last_page && pagesNumber[0] > 1
        "
      >
        <a :class="classes[1]" href="#" @click.prevent> ... </a>
      </li>
      <li
        v-for="page in pagesNumber"
        v-bind:class="[page == isActived ? 'active ' + classes[0] : '']"
      >
        <a :class="classes[1]" href="#" @click.prevent="changePage(page)">
          {{ page }}
        </a>
      </li>
      <li
        v-if="
          pagination.current_page < pagination.last_page &&
          pagesNumber[pagesNumber.length - 1] < pagination.last_page
        "
      >
        <a :class="classes[1]" href="#" @click.prevent> ... </a>
      </li>
      <li
        v-if="
          pagination.current_page < pagination.last_page &&
          pagesNumber[pagesNumber.length - 1] < pagination.last_page
        "
      >
        <a
          :class="classes[1]"
          href="#"
          @click.prevent="changePage(pagination.last_page)"
        >
          {{ pagination.last_page }}
        </a>
      </li>

      <li v-if="pagination.current_page < pagination.last_page">
        <a
          :class="classes[1]"
          href="#"
          @click.prevent="changePage(pagination.current_page + 1)"
        >
          <span>></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  pagination: {
    current_page: number;
    last_page: number;
    to: number;
    from: number;
  };
  color: keyof typeof colors;
}>();

let emit = defineEmits(["changePage"]);

let offset =
  Math.ceil(props.pagination.last_page / 10) <= 10
    ? Math.ceil(props.pagination.last_page / 10)
    : 10;

const pagesNumber = computed(() => {
  if (!props.pagination.to) {
    return [];
  }
  let from = props.pagination.current_page - offset;
  if (from < 1) {
    from = 1;
  }
  let to = from + offset * 2;
  if (to >= props.pagination.last_page) {
    to = props.pagination.last_page;
  }
  const pagesArray = [];
  while (from <= to) {
    pagesArray.push(from);
    from++;
  }
  return pagesArray;
});

const isActived = computed(() => {
  return props.pagination.current_page;
});

const changePage = (page: number) => {
  props.pagination.current_page = page;
  props.pagination.to = page;
  emit("changePage", page);
};

let colors = {
  primary: ["bg-primary-500", "text-primary-500", "border-primary-500"],
  muted: ["bg-muted-500", "text-muted-500", "border-muted-500"],
  success: ["bg-success-500", "text-success-500", "border-success-500"],
  neutral: ["bg-neutral-500", "text-neutral-500", "border-neutral-500"],
  background: [
    "bg-background-500",
    "text-background-500",
    "border-background-500",
  ],
  error: ["bg-error-500", "text-error-500", "border-error-500"],
  warning: ["bg-warning-500", "text-warning-500", "border-warning-500"],
  info: ["bg-info-500", "text-info-500", "border-info-500"],
  dark: ["bg-white", "text-white", "border-white"],
};

let classes = computed(() => {
  return colors[props.color ?? "primary"];
});
</script>

<style scoped>
.pagination {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.pagination ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.pagination ul li {
  margin: 0 5px;
}

ul {
  @apply bg-muted-500 h-10 flex items-center justify-center rounded-md border-[1px];
}
li {
  @apply w-8 h-8  flex justify-center items-center;
}
a {
  @apply font-sans text-xl;
}

.pagination ul li.active {
  @apply text-muted-500 rounded-md;
}

.pagination ul li.active a {
  @apply text-muted-500 rounded-md;
}
</style>
