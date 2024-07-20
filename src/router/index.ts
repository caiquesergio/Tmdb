import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../components/ListMovies.vue') },
  { path: '/movie:id', name: 'movie' , component: () => import('../components/SelectedMovie.vue') },
  { path: '/search-movie:name', name: 'search-movie' , component: () => import('../components/ListMoviesSearch.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router