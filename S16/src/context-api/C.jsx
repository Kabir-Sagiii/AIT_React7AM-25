import { useContext } from "react";
import mycontext from "./context";
import D from "./D";
function C({}) {
  let data = useContext(mycontext);
  return (
    <div>
      <h2>
        C Component :<span style={{ color: "green" }}>{data}</span>
      </h2>

      <hr />
      <br />
      <D />
    </div>
  );
}

export default C;
