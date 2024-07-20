<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { getMovieSearch } from '../services/movies.service';
import router from '../router';

const route = useRoute();

const listSearchMovies = ref(null);

onMounted(async () => {
    listSearchMovies.value = await getMovieSearch(route.params.name);        
})  

function getMovieSelected(id) {    
    router.push({ name: 'movie', params: { id: id } });
}
</script>

<template>
    <div class="pb-20 px-52">        
        <div class="pt-5 pb-10">
            <RouterLink to="/" class="text-xl font-semibold">Início</RouterLink>
        </div>        
        <div v-for="movie in listSearchMovies" class="flex py-5 drop-shadow-md">
            <div class="border flex w-full">
                <img class="w-20 h-32" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80" >
                <div class="pl-5 block">
                    <p class="font-semibold text-xl cursor-pointer" @click="getMovieSelected(movie.id)">{{ movie.title }}</p>
                    <p class="text-sm">{{ movie.release_date.split('-').reverse().join('/') }}</p>
                    <p class="line-clamp-2 pt-5">{{ movie.overview }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
