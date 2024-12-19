import { useReducer } from "react";
import reducer from "./reducer";

function Counter() {
  let [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ padding: "100px" }}>
      <h2>Count Value:{state}</h2>
      <br />
      <button>incCount</button>
      <button>decCount</button>
      <button>reset</button>
    </div>
  );
}

export default Counter;
