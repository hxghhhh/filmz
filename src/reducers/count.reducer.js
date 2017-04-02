export default (state={count:0}, action) => {
  switch(action.type) {
    case "INC": {
      return {count: state.count+action.payload.count};
      break;
    }
    case "DEC": {
      return {count: state.count-action.payload.count};
      break;
    }
  }
  return state;
}
