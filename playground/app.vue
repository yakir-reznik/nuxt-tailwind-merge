<template>
  <div class="p-4">
    <div class="p-12 border-2 border-red-300">
      <h1>Hello world</h1>
      <Child :some-prop="2342" :class="`text-amber-200 text-lg`" v-tw-merge />
      <Other />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped></style>
