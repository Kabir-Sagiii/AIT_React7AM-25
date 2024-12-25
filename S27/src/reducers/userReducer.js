const userReducer = (state = "xyz", action) => {
  //Logic to update to Store

  if (action.type === "NAME") {
    state = action.payload;
  }

  return state;
};

export default userReducer;
