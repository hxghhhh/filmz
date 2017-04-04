const initialState = {
    sort_by: '',
    genre: '',
    year: 2016
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "SET_GENRE": {
      return {...state, genre: action.payload};
      break;
    }
    case "SET_YEAR": {
      return {...state, year: action.payload};
      break;
    }
    case "SET_SORT_BY": {
      return {...state, sort_by: action.payload};
      break;
    }
  }
  return state;
}
