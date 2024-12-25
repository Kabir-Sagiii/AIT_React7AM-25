const reducer = (state, action = { type: "" }) => {
  //action = {type:"DEC",count:3}
  //state = 0
  //Logic to update our current state and then return new state
  // state = "Hello Reducer";
  // return "Hello, How are you";

  if (action.type === "INC") {
    state = state + action.count;
  } else if (action.type === "DEC") {
    state = state - action.count;
  } else {
    state = 0;
  }

  return state;
};

export default reducer;

//From reducer function watever you will return it will updated in
//the state
