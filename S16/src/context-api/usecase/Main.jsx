import React from "react";
import Login from "./Login";
import Home from "./Home";
function Main({ state }) {
  return <div>{state ? <Home /> : <Login />}</div>;
}

export default Main;
