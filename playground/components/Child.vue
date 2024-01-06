<template>
  <div class="text-red-500 text-xl" v-tw-merge>
    Lorem ipsum dolor sit amet consectetur adipisicing elit
    <p>{{ props.someProp }}</p>
    <p>{{ props.optionalProp }}</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    someProp: number;
    optionalProp?: string;
  }>(),
  {
    optionalProp: "fallback optionalProp",
  }
);
</script>

<style lang="sass" scoped></style>
