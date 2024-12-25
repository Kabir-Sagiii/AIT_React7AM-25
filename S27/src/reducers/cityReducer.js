const cityReducer = (state = "hyderabad", action) => {
  if (action.type === "CITY") {
    state = action.payload;
  }
  return state;
};

export default cityReducer;
