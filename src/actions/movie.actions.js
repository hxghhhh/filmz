import axios from 'axios';
import config from '../config'

export function fetchNowPlayingMovie(){
  return {
    type:'FETCH_MOVIE',
    payload: axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+config.movieApiKey)
  }
}

export function fetchFilters(){
  return {
    year: [],
    genre: [

    ],
    sort_by: [
      {value:'pop_desc', label: 'Popularity Descending'},
      {value:'pop_asc', label: 'Popularity Ascending'},
      {value:'rate_desc', label: 'Rating Descending'},
      {value:'rate_asc', label: 'Rating Ascending'},
    ]
  }
}
