import { useReducer } from "react";
import reducer from "./reducer";

function Counter() {
  let [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ padding: "100px" }}>
      <h2>Count Value:{state}</h2>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "INC", count: 1 }); //action object
        }}
      >
        incCount
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC", count: 1 });
        }}
      >
        decCount
      </button>

      <button
        onClick={() => {
          dispatch({ type: "INC", count: 5 });
        }}
      >
        Increase by 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DEC", count: 3 });
        }}
      >
        Decrease by 3
      </button>
      <button
        onClick={() => {
          dispatch();
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
