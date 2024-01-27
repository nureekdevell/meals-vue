<template>
  <div class="p-6">
    <input v-model="keyword" @change="searchMeals" type="text" class="rounded border-gray-400 w-full" placeholder="Search for Meals">
  </div>
  <div>
    <div v-for="meal of meals" :key="meal.idMeal">
      <img :src="meal.strMealThumb" :alt="strMeal">
      <h3>{{meal.strMeal}}</h3>
      <div>
        <a :href="meal.strYoutube" target="_blank">Youtube</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

import state from "../store/state.js";
import store from "../store/index.js";

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
  // axiosClient.get(`search.php?s=${keyword.value}`)
}


</script>

<style lang="scss" scoped>

</style>