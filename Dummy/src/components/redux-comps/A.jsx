import { useRef } from "react";
import userActionCreator from "../../actions/userActionCreator";
import store from "../../redux-Store/Store";

function A() {
  const inputRef = useRef();
  const getActionObject = () => {
    // var actionObject = userActionCreator(inputRef.current.value);
    // store.dispatch(actionObject);

    store.dispatch(userActionCreator(inputRef.current.value));
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>User Name</h2>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={getActionObject}>Submit</button>
    </div>
  );
}

export default A;
