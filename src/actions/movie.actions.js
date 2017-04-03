import axios from 'axios';
import config from '../config'

export function fetchNowPlayingMovie(){
  return {
    type:'FETCH_MOVIE',
    payload: axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+config.movieApiKey)
  }
}
