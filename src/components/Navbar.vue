<template>
  <div>
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link :to="{name: 'home'}">Home</router-link>
      <div class="">
        <router-link :to="{name: 'byName'}"  class=" px-2 h-full hover:bg-purple-200">
          Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" class=" px-2 h-full hover:bg-purple-200">
          Meals By Letter
        </router-link>
        <router-link :to="{name: 'byIngredient'}"  class=" px-2 h-full hover:bg-purple-200">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>