import { useState } from "react";
import B from "./B";
import mycontext from "./context";
function A() {
  let [state, setState] = useState("Raj Verma");

  const updateUser = () => {
    setState("Riya Sharma");
  };
  return (
    <div>
      <h2>A Component</h2> <br />
      <button onClick={updateUser}>Pass Data to E</button>
      <br />
      <br />
      <hr />
      <br />
      <mycontext.Provider value={state}>
        <B />
      </mycontext.Provider>
    </div>
  );
}

export default A;
