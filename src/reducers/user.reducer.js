const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  user: {
    id:null,
    name:null,
    age:null
  },
  savedMovies:[]
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "SET_NAME": {
      return {...state, name: action.payload};
      break;
    }
    case "SET_AGE": {
      return {...state, age: action.payload};
      break;
    }
    case "FETCH_MOCK_USER": {
      return {...state.user, user: action.payload, fetched:true};
      break;
    }
    case "SAVE_MOVIE": {
      return {...state, savedMovies:[...state.savedMovies, action.payload]};
      break;
    }
  }
  return state;
}
