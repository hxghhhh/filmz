import axios from 'axios';
import config from '../config.json';

export function fetchNowPlayingMovie() {
  return {
    type: 'FETCH_MOVIE',
    payload: axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key='${config.movieApiKey}`),
  };
}

export function fetchFilteredMovie(sort_by='', genre='', year=''){
  const sort_by_q = (sort_by !== '') ? `sort_by=${sort_by}&` : '';
  const genre_q = (genre !== '') ? `with_genres=${genre}&` : '';
  const year_q = (year !== '') ? `primary_release_year=${year}` : '';
  return {
    type:'FETCH_MOVIE',
    payload: axios.get(`${config.baseUrl}/discover/movie?api_key=${config.movieApiKey}&${sort_by_q}${genre_q}${year_q}`)
  };
}
