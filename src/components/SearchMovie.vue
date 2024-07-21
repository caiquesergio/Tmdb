<script setup lang="ts">
import { ref } from 'vue';
import router from '../router';

const searchMovie = ref("");

function searchMoviesInput(name: string) {
  router.push({ name: 'search-movie', params: { name: name } });
}

</script>

<template>
  <div class="flex">
    <input type="text" name="movie" id="movie" v-model="searchMovie"
      class="rounded-full px-3 py-2 bg-white border shadow-sm border-slate-300 w-full sm:text-sm focus:ring-1 text-black"
      placeholder="Buscar por um filme">
    <button @click="searchMoviesInput(searchMovie)"
      class="-ml-8 w-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border shadow-sm text-white font-semibold">Buscar</button>
  </div>
</template>
