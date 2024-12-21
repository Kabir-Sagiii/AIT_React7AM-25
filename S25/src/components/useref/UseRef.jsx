import { useRef } from "react";

function UseRef() {
  let h2ref = useRef(); //h2ref = {current:DOMElement}
  let btnRef = useRef();

  return (
    <div style={{ padding: "100px" }}>
      <h2 ref={h2ref}>useRef() Hook concept</h2>
      <button
        ref={btnRef}
        onClick={() => {
          h2ref.current.style.color = "red";
          h2ref.current.innerText = "useRef() hook is implemented";
          btnRef.current.style.color = "red";
        }}
      >
        Change Style
      </button>
    </div>
  );
}

export default UseRef;
