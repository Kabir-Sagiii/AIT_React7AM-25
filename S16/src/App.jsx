import "./App.css";
import { useState } from "react";
import Nav from "./nav/Nav";
import Main from "./context-api/usecase/Main";
import authContext from "./context-api/usecase/authContext";
function App() {
  const [state, setState] = useState(false);

  const login = () => {
    setState(true);
  };

  const logout = () => {
    setState(false);
  };

  return (
    <div>
      <authContext.Provider value={{ login, logout }}>
        <Nav state={state} />
        <Main state={state} />
      </authContext.Provider>

      {/* <div style={{ padding: "50px" }}>
        <A />
      </div> */}
    </div>
  );
}

export default App;
