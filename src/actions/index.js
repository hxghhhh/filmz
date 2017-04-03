import axios from 'axios';
import config from '../config'
export function inc(byN) {
  return {
    type: 'INC',
    payload: {
      count: byN
    }
  }
}

export function dec(byN) {
  return {
    type: 'DEC',
    payload: {
      count: byN
    }
  }
}

export function fetchMockUser() {
  return {
    type: 'FETCH_MOCK_USER',
    payload: {
      name: 'Hugh',
      age: '24'
    }
  }
}

export function fetchMovie(){
  return {
    type:'FETCH_MOVIE',
    payload: axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+config.movieApiKey)
  }
}
