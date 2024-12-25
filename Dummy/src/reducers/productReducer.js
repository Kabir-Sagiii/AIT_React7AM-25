const productReducer = (state = [], action) => {
  if (action.type === "PRODUCTS") {
    state = action.payload;
  }
  return state;
};

export default productReducer;
