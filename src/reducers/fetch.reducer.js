const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_DATA': {
      return {...state,
        fetching: true}
      break;
    }
    case "FETCH_DATA_COMPLETE": {
      return {...state,
        fetched: true,
        fetching: false,
        data: action.payload }
      break;
    }
    case "FETCH_DATA_ERROR": {
      return {...state,
        fetching: false,
        error: action.payload}
      break;
    }
  }
  return state;
}
