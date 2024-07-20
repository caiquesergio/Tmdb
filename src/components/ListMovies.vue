<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTopRatedMovies, getPopularMovies, getUpcomingMovies } from '../services/movies.service';
import { useRouter } from 'vue-router'
import SearchMovie from './SearchMovie.vue';

const router = useRouter()

const listPopularMovies = ref();
const listTopRatedMovies = ref();
const listUpcomingMovies = ref();

onMounted(async () => {
  listPopularMovies.value = await getPopularMovies();
  listTopRatedMovies.value = await getTopRatedMovies();
  listUpcomingMovies.value = await getUpcomingMovies();
})

function getSelectedMovie(id: number) {
  router.push({ name: 'movie', params: { id: id } });
}

</script>

<template>
  <div class="px-64 py-14">
    <div class="pb-6">
      <p class="text-4xl font-bold">Bem-Vindo(a).</p>
      <p class="text-lg font-bold"> Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</p>
    </div>
    <SearchMovie />
    <div class="pb-14 pt-14">
      <div class="text-start pl-8 pb-8">
        <h1 class="font-bold text-2xl">Mais Populares</h1>
      </div>
      <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-10">
        <div v-for="movie in listPopularMovies" @click="getSelectedMovie(movie.id)"
          class="snap-always snap-center first:pl-8 last:pr-8 cursor-pointer">
          <img class="max-w-32 h-56 object-cover rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
          <p class="text-start">{{ movie.title }}</p>
          <p class="text-start">{{ movie.release_date.split('-').reverse().join('/') }}</p>
        </div>
      </div>
    </div>
    <div class="pb-14">
      <div class="text-start pl-8 pb-8">
        <h2 class="font-bold text-2xl">Mais Votados</h2>
      </div>
      <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-10">
        <div v-for="movie in listTopRatedMovies" @click="getSelectedMovie(movie.id)"
          class="snap-always snap-center first:pl-8 last:pr-8 cursor-pointer">
          <img class="max-w-32 h-56 object-cover rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
          <p class="text-start">{{ movie.title }}</p>
          <p class="text-start">{{ movie.release_date.split('-').reverse().join('/') }}</p>
        </div>
      </div>
    </div>
    <div class="pb-14">
      <div class="text-start pl-8 pb-8">
        <h2 class="font-bold text-2xl">Por Vir</h2>
      </div>
      <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-10">
        <div v-for="movie in listUpcomingMovies" @click="getSelectedMovie(movie.id)"
          class="snap-always snap-center first:pl-8 last:pr-8 cursor-pointer">
          <img class="max-w-32 h-56 object-cover rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
          <p class="text-start">{{ movie.title }}</p>
          <p class="text-start">{{ movie.release_date.split('-').reverse().join('/') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
