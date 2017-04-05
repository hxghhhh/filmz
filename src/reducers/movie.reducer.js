const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_PENDING': {
      return { ...state,
        fetching: true,
      };
    }
    case 'FETCH_MOVIE_FULFILLED': {
      return { ...state,
        fetched: true,
        fetching: false,
        data: action.payload,
      };
    }
    case 'FETCH_MOVIE_REJECTED': {
      return { ...state,
        fetching: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
