<template>
  <div class="flex flex-col p-8 ">
    <input type="text" class="rounded border-gray-400 w-full" placeholder="Search for Meals">

    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{letter}}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import store from "../store/index.js";

const meals = computed(() => store.state.meals);
const letters = ref("QWERTYUIOPASDFGHJKLZXCVBNM".split(""))
</script>

<style lang="scss" scoped>

</style>