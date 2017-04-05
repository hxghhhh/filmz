const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  user: {
    id: null,
    name: null,
    age: null,
  },
  savedMovies: [],
  movieHash: [],
};

const removeMovieFromCollection = (collection, id) => {
  for (var i = 0; i < collection.length; i += 1) {
    if (collection[i].id === id && i > -1) {
      collection.splice(i, 1); // remove 1 element at index i
      break;
    }
  }
  return collection;
};

const removeMovieFromHash = (hash, id) => {
  for (var i = 0; i < hash.length; i += 1) {
    if (hash[i] === id && i > -1) {
      hash.splice(i, 1); // remove 1 element at index i
      break;
    }
  }
  return hash;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME': {
      return { ...state,
        name: action.payload };
    }
    case 'SET_AGE': {
      return { ...state,
        age: action.payload };
    }
    case 'FETCH_MOCK_USER': {
      return { ...state.user,
        user: action.payload,
        fetched: true };
    }
    case 'SAVE_MOVIE': {
      return { ...state,
        savedMovies: [...state.savedMovies, action.payload],
        movieHash: [...state.movieHash, action.payload.id],
      };
    }
    case 'REMOVE_MOVIE': {
      const newCollection = removeMovieFromCollection(state.savedMovies, action.payload);
      const newHash = removeMovieFromHash(state.movieHash, action.payload);
      return { ...state,
        savedMovies: newCollection,
        movieHash: newHash,
      };
    }
    default: {
      return state;
    }
  }
};
