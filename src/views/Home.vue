<template>
  <div class="flex flex-col p-8 ">
    <input type="text" class="rounded border-gray-400 w-full" placeholder="Search for Meals">

    <div class="flex gap-1">
      <router-link to="" v-for="letter of letters.split('')">{{letter}}</router-link>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import store from "../store/index.js";

const meals = computed(() => store.state.meals)
const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
</script>

<style lang="scss" scoped>

</style>