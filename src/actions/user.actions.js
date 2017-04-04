import axios from 'axios';
import config from '../config'

export function saveMovie(movie){
  return {
    type: 'SAVE_MOVIE',
    payload: movie
  }
}
