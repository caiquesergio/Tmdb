<script setup>
import { onMounted, ref } from 'vue'
import { getDetailMovie, getCastMovie } from '../services/movies.service'
import { useRoute } from 'vue-router'

const route = useRoute()

const selectedMovie = ref(null)
const castMovie = ref(null)

onMounted(async () => {
    selectedMovie.value = await getDetailMovie(route.params.id);
    castMovie.value = await getCastMovie(route.params.id);
})
</script>

<template>
    <div class="px-40 pb-20" v-if="selectedMovie !== null && castMovie !== null">
        <div class="pt-5 pb-10">
            <RouterLink to="/" class="text-xl font-semibold">Início</RouterLink>
        </div>
        <div class="flex">
            <img class="max-w-72 h-96 object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
            <div class="pl-10 block">
                <p class="text-4xl font-semibold">{{ selectedMovie.title }}</p>
                <p class="flex"> <span class="text-xs pr-2" v-for="genre in selectedMovie.genres">{{ genre.name
                        }}</span></p>
                <p class="pt-10 text-sm">{{ selectedMovie.tagline }}</p>
                <p class="pt-2 text-base font-semibold">Sinopse</p>
                <p class="text-sm">{{ selectedMovie.overview }}</p>
            </div>
        </div>
        <div class="pt-10 relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-10">
            <div v-for="cast in castMovie.cast" class="snap-always snap-center last:pr-8">
                <img class="max-w-32 h-56 object-cover rounded-lg shadow-xl"
                    src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
                <p class="text-sm pt-2 font-semibold">{{ cast.name }}</p>
                <p class="text-xs">{{ cast.character }}</p>
            </div>
        </div>
    </div>
    <div class="text-center pt-80" v-else>
        Carregando...
    </div>
</template>
