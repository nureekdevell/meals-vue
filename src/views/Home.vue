<template>
  <input type="text" class="rounded border-gray-400">
</template>

<script setup>
import {computed} from "vue";
import store from "../store/index.js";

const meals = computed(() => store.state.meals)
</script>

<style lang="scss" scoped>

</style>