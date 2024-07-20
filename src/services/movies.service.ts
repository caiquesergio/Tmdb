const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjVkMGUyZmYyZmM0Mjk0OThlMmE1YWYwNTRlMzk1YSIsIm5iZiI6MTcyMDQ4MDAyNy44MDMxMDYsInN1YiI6IjY2OGM2ZmJhMzgxZWVlNWViNWYzM2Q0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NeNZ1OEtp2qWJnz2__v9Q2Jkvid1_O57nZZqSD6xa7E")
myHeaders.append("accept", "application/json")

async function http<T>(url: string) {
  const resposta = await fetch(url, {
    headers: myHeaders
  });
  return resposta.json() as T;
}

export async function getPopularMovies() {
  return http<any>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc').then((res) => {    
    return res.results
  }).catch(e => {
    console.log(e);
  });
}

export async function getTopRatedMovies() {
  return http<any>('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1').then((res) => {    
    return res.results
  }).catch(e => {
    console.log(e);
  });
}

export async function getUpcomingMovies() {
  return http<any>('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1').then((res) => {    
    return res.results
  }).catch(e => {
    console.log(e);
  });
}

export async function getDetailMovie(movieId: number) {
  return http<any>(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`).then((res) => {    
    return res
  }).catch(e => {
    console.log(e);
  });
}

export async function getCastMovie(movieId: number) {
  return http<any>(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR`).then((res) => {    
    return res
  }).catch(e => {
    console.log(e);
  });
}

export async function getMovieSearch(nameMovie: string) {
  return http<any>(`https://api.themoviedb.org/3/search/movie?query=${nameMovie}&include_adult=false&language=pt-BR&page=1`).then((res) => {    
    return res.results
  }).catch(e => {
    console.log(e);
  });
}

