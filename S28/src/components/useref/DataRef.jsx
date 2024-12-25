import { useState, useRef } from "react";

function DataRef() {
  let [state, setState] = useState(100);
  let refObj = useRef(1000); // refObj = {current:1000}
  var count = 0;

  const printValues = () => {
    console.log("State Value :", state);

    console.log("Variable Value :", count);

    console.log("Ref Value :", refObj.current);
  };

  const updateVariable = () => {
    count++;
  };

  const updateState = () => {
    setState(state + 1);
  };

  const updateRef = () => {
    refObj.current = refObj.current + 1;
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Understanding useRef() hook</h2>
      <button onClick={printValues}>Print Values</button>
      <button onClick={updateVariable}>Update Variable</button>
      <button onClick={updateState}>Update State</button>
      <button onClick={updateRef}>Update Ref</button>
    </div>
  );
}

export default DataRef;
