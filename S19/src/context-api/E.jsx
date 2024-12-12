import { useContext } from "react";
import mycontext from "./context";
function E() {
  let contextData = useContext(mycontext);
  return (
    <div>
      <h2>E Component</h2>
      <p style={{ color: "red", fontWeight: "bold" }}>{contextData}</p>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default E;
